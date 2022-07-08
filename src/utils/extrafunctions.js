
export function MyDebouncing(cb, delay) {
    let interval = null;
    return function (...args) {
      if (interval) {
        clearTimeout(interval);
      }
      interval = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  }
  
export function MyThrottling(cb, delay) {
    let interval = true;
    return function (...args) {
      if (interval) {
        interval = false;
        cb(...args);
        setTimeout(() => {
          interval = true;
        }, delay);
      }
    };
  }
export const notify = (toast, title, status, description,position="top") => {
    return toast({
        title,
        status,
        description,
        duration: 3*1000,
        variant: "top-accent",
        isClosable: true,
        position: `${position}`
    });
};

