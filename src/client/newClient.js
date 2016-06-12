import css from '../resources/styling/index';

let maxScroll, elements;
elements = [];

/* ---==={ Styling Schema }===---
  [
    {
      element: [ DOMElement ],
      rawStyling: [
        {
          pos: 0,
          styles: [
            {
              pre: 'transform: translateY(',
              value: 100,
              post: '%)'
            },
            { ... }, { ... }, ...
          ];
        },
        { ... }, { ... }, ...
      ],
      styling: {
        0: 'transform: translateY(100%);',
        1: '...',
        ...
      }
    },
    { ... }, { ... }, ...
  ]
 */

/* ---==={ On window load }===---
   - Iterate through children
     - Parse styles
     - Get container maxHeight
   - Interpolate styles
   - Apply initial styles
 */
window.onload = () => {
  let maxScroll = 0;
  let container =  document.getElementById('scroll-container');
  let nodes = container.children;

  // For each node ...
  for (let i = 0, len = nodes.length; i < len; ++i) {
    let curNode = {};
    let attrs = nodes[i].attributes;

    // Check each attribute ...
    for (let j = 0, numAttrs = attrs.length; j < numAttrs; ++j) {
      
      // If a scroll attribute exists ...
      if (attrs[j].name.startsWith('scroll-')) {
        if (curNode.element === undefined) {
          curNode['element'] = nodes[i];
          curNode['rawStyling'] = [];
        }

        // Track largest scroll value
        let pos = parseInt(attrs[j].name.split('-')[1]);
        pos > maxScroll ? maxScroll = pos : null;

        // Create a temporary rawStyling object
        let rawStyling = {
          pos: pos,
          styles: []
        }

        // Separate out all different styles for this scroll position
        let allStyles = attrs[j].value.split(';');

        // For each style ...
        for (let k = 0, numStyles = allStyles.length; k < numStyles; ++k) {
          // Parse it and push into the array if it's valid
          allStyles[k] !== ''
            ? rawStyling.styles.push(parseStyle(allStyles[k]))
            : null;
        }
        curNode.rawStyling.push(rawStyling);
      }

      // Ignore all other element attributes
    }

    // Sort styles by scroll position
    if (Object.keys(curNode).length !== 0) {
      curNode.rawStyling.sort((el1, el2) => {
        return el1.pos - el2.pos;
      })
      elements.push(curNode);
    };
  }

  container.style.setProperty('height', String(maxScroll) + 'px');
  console.log(maxScroll);
  console.log(elements);

  // Interpolate frame and set styling
  interpFrameStyling(elements, 0);
/*  for (let i = 0, len = elements.length; i < len; ++i) {
    elements[i].styling = intepolateStyling(elements[i].rawStyling);
  }*/

  // Apply styles
}

/* ---==={ Interpolate frame styling }===---
   - Iterate through all elements
   - Interp styling from rawStyling and scroll position
   - Apply style
*/

function interpFrameStyling(elements, curPos) {
  // For each element ...
  for (let i = 0, els = elements.length; i < els; ++i) {
    // Check for stylings around current position
    let curEl = elements[i];
    let rawStyles = curEl.rawStyling;

    for (let j = 0, styles = rawStyles.length; j < styles; ++j) {
      // if curPos is before the first style position
      if (curPos <= rawStyles[j].pos && j === 0 {
        
      }
      // anything in between
      // if curPos is equal or past the last style position
    }
  }
}

/* ---==={ Parse styling attributes }===---
   - Regex for styling attribute
   - Parse out pre, value, and post
   - Return parsed styling
     {
       pre: 'transform: translateY(',
       value: 100,
       post: '%)'
     }
 */
function parseStyle(style) {
  let pre   = style.trim().match(/\D+(?!-\d+)\D/)[0];
  let value = parseFloat(style.trim().split(/\D+(?!-\d+)\D/)[1]);
  let post  = style.trim().match(/\D+$/)[0];

  return Object.assign({}, { 'pre': pre, 'value': value, 'post': post });
}


/* ---==={ Interpolate Styles }===---
   - iterate through all styles
   - for each pair
     - get initial keyframe + value
     - get end keyframe + value
     - interp and add to object
   - Return interpolated style object
     {
       0: 'transform: translateY(100%);',
       1: '...',
       ...
     }
 */
/*
function interpolateStyling(rawStyles) {
  let interpStyles = {};
  // For all pairs of styles in rawStyles ...
  for (let i = 0, len = rawStyles.length; i < len - 1; ++i) {
    // Get the styling positions
    let posOne = rawStyles[i].pos;
    let posTwo = rawStyles[i + 1].pos;
    // Get the raw styles at that position
    let stylesOne = rawStyles[i].styles;
    let stylesTwo = rawStyles[i + 1].styles;

    let matchingStyles = [];

    // For all the styles ...
    for (let j = 0, firstStyles = stylesOne.length; j < firstStyles; ++j) {
      // Only interpolate matching styles
      for (let k = 0, secondStyles = stylesTwo.length; k < secondStyles; ++k) {
        if (stylesOne[j].pre === stylesTwo[k].pre) {
          matchingStyles.push({
            pre: stylesOne[j].pre,
            valOne: stylesOne[j].value,
            valTwo: stylesTwo[j].value,
            post: stylesOne[j].post
          });
        }
      }
    }

    // Interpolate all styles in matchingStyles
    for (let j = 0, length = matchingStyles.length; j < length; ++j) {
    }
  }
}
*/

/* ---==={ OnScroll }===---
   - interp stye and apply keyframe styling
 */