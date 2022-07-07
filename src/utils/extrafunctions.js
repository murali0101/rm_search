

export const notify = (toast, title, status, description,position="top") => {
    return toast({
        title,
        status,
        description,
        duration: 5*1000,
        variant: "top-accent",
        isClosable: true,
        position: `${position}`
    });
};

