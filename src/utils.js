import NestedFlow from "./NestedFlow";

export function uniqueBy(by, data) {
  return [...new Map(data.map((item) => [item[by], item])).values()];
}

export function removeUpHandler({ node, elements }) {
  return elements.filter((el) => el.id !== node.id);
}
export function intersectionHandler({ intersected, node, elements }) {
  const updatedEls = elements
    .filter((el) => el.id !== node.id) // remove self from parent
    .map((el) => {
      // add it to new parent
      if (el.id === intersected.id) {
        const children = [
          ...(el?.children || []),
          { ...node, position: { x: 0, y: 0 } },
        ];

        return {
          ...el,
          children,
          style: {
            ...el.style,
            width: 150 * (children.length || 1),
            height: 80 * (children.length || 1),
          },
          data: {
            label: <NestedFlow id={`nested-${node.id}`} elements={children} />,
          },
        };
      } else {
        return el;
      }
    });

  return updatedEls;
}

export function getFlowItemNode(id, iframeId = false) {
  if (iframeId) {
    try {
      const iframe = document.getElementById(iframeId);
      return iframe.contentDocument.querySelectorAll(`[data-id="${id}"]`)?.[0];
    } catch {
      return null;
    }
  } else return document.querySelectorAll(`[data-id="${id}"]`)?.[0];
}
export function overflows(itemId, iframeId) {
  if (!iframeId) return false;
  try {
    const iframe = document.getElementById(iframeId);
    const frameRect = iframe.contentDocument.body.getBoundingClientRect();
    const item = getFlowItemNode(itemId, iframeId);
    const itemRect = item.getBoundingClientRect();

    if (itemRect.x < 0 || itemRect.x + itemRect.width > frameRect.width) {
      return true;
    } else if (itemRect.y < 0 || itemRect.bottom > frameRect.bottom) {
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}

// stackoverflow
export function overlaps(a, b) {
  try {
    const rect1 = a.getBoundingClientRect();
    const rect2 = b.getBoundingClientRect();
    const isInHoriztonalBounds =
      rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x;
    const isInVerticalBounds =
      rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y;
    const isOverlapping = isInHoriztonalBounds && isInVerticalBounds;
    return isOverlapping;
  } catch {
    return false;
  }
}

export function onDragStopHandler({ node, elements, setElements, iframeId }) {
  const domNode = getFlowItemNode(node.id, iframeId);

  const removeUp = overflows(node.id, iframeId);
  if (removeUp) {
    console.log("TODO: MOVE UP LOGIC HERE");
    // const updatedEls = removeUpHandler({ node, elements });
    // setElements(updatedEls);
    // console.log(node);
    return;
  }

  const intersected = elements.find((el) => {
    if (el.id === node.id) return false; // skip if its itself
    const currentNode = getFlowItemNode(el.id, iframeId);

    return overlaps(domNode, currentNode);
  });

  if (intersected) {
    const updatedEls = intersectionHandler({ intersected, node, elements });

    setElements(updatedEls);
  }
}
