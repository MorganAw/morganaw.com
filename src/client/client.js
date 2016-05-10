import css from '../resources/styling/index';

window.addEventListener('scroll', (event) => {
  let scrollY = window.scrollY;
  let elements = document.body.children;
  for (let i = 0, len = elements.length; i < len; ++i) {
    if (elements.item(i).classList.contains('section')) {
    }
  }
});


// My single-layer parallax implementation
let container, nodes, styling, maxScroll;
maxScroll = 0;
styling = [];

/*
--- styling structure ---
{
  id: elementID,
  style: [pos1, pos2, ...]
}

Ex:
{
  id:    'skills',
  style: [ { position: 150,
              styles: ['width', 100, 'px'] },
            { position: 500,
              styles: ['width', 0, 'px'] } ]
}
*/

// On dom load
// check children and all properties
// Set height of container to max ticks (largest scroll value + height)
window.onload = () => {
  container =  document.getElementById('scroll-container');
  nodes = container.children;

  // For each node ...
  for (let i = 0, len = nodes.length; i < len; ++i) {
    let curNode = {};
    let attrs = nodes[i].attributes;
    let thisID  = nodes[i].attributes.getNamedItem('id').value;

    // Check each attribute ...
    for (let j = 0, numAttrs = attrs.length; j < numAttrs; ++j) {
      // For scroll values
      if (attrs[j].name.startsWith('scroll')) {
        if (curNode.id === undefined) {
          curNode['id'] = thisID;
          curNode['styling'] = [];
        }
        let thisStyle = {
          position: 0,
          styles: []
        };
        // Keep track of largest scroll value and styling at each value
        let pos = parseInt(attrs[j].name.split('-')[1]);
        pos > maxScroll ? maxScroll = pos : null;
        thisStyle.position = pos;
        
        let rawStyles = attrs[j].value.split(';');
        for (let k = 0, numStyles = rawStyles.length; k < numStyles; ++k) {
          rawStyles[k] !== ''
            ? thisStyle.styles.push(parseStyle(rawStyles[k]))
            : null;
        }
        curNode.styling.push(thisStyle);
      }
    }

    if (Object.keys(curNode).length !== 0) {
      styling.push(curNode);
    }
    console.log(styling);
  }
};

/*
 * -----=== { paresStyle } ===-----
 * input <String>
 *   - Ex: 'width: 100px'
 * 
 * returns <Array>
 *   - Ex: [ 'width', 100, 'px' ]
 */
function parseStyle(style) {
  let result = [];
  let components = style.split(':');
  let value = components[1].trim().match(/\d+/);

  result.push(components[0].trim());
  result.push(parseFloat(value));
  result.push(components[1].trim().match(/\D+/)[0]);

  return result;
}

// On scroll
// Set props

// On window resize
// Resize scroll-container height
// Set props

// Set props
// For each child in scroll container
// Calculate interpolated properties and apply to dom element