 const getDefaultImageAvator = (img: string): string => {
    return process.env.NEXT_PUBLIC_BASEURL + "/data/uploads/" + img ;
};
export default getDefaultImageAvator
