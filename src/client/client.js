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

    // Check each attribute ...
    for (let j = 0, numAttrs = attrs.length; j < numAttrs; ++j) {
      // For scroll values
      if (attrs[j].name.startsWith('scroll')) {
        if (curNode.node === undefined) {
          curNode['node'] = nodes[i];
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
      curNode.styling.sort((el1, el2) => {
        return el1.position - el2.position;
      })
      styling.push(curNode);
    };
  }
};

/*
 * -----=== { paresStyle } ===-----
 * input <String>
 *   - Ex: 'width: 100px'
 * 
 * returns <Array> [ pre, value, post ]
 *   - Ex: [ 'width:', 100, 'px' ]
 */
function parseStyle(style) {
  let result = [];
  let pre   = style.trim().match(/\D+(?!-\d+)\D/)[0];
  let value = parseFloat(style.trim().split(/\D+(?!-\d+)\D/)[1]);
  let post  = style.trim().match(/\D+$/)[0];
  result.push(pre, value, post);

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