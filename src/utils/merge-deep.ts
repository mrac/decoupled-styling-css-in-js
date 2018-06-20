function isObject(item: any): boolean {
  return item && typeof item === 'object' && !Array.isArray(item);
}

export function mergeDeep<T>(target: T, source: T | undefined): T {
  const output = { ...(target as any) };
  const src: T = source || ({} as T);

  if (isObject(target) && isObject(src)) {
    Object.keys(src).forEach(key => {
      if (typeof src[key] !== 'undefined') {
        if (isObject(src[key])) {
          if (!(key in target)) {
            Object.assign(output, { [key]: src[key] });
          } else {
            output[key] = mergeDeep(target[key], src[key]);
          }
        } else {
          Object.assign(output, { [key]: src[key] });
        }
      }
    });
  }
  return output;
}
