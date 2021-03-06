export function noop() {
  // do nothing
}

function getGlobals() {
  /* global self, window, global */
  if (typeof self !== 'undefined') {
    return self;
  } else if (typeof window !== 'undefined') {
    return window;
  } else if (typeof global !== 'undefined') {
    return global;
  }
  return undefined;
}

export const globals = getGlobals();
