
const Colors = {
    black: '#292929',
    primary: '#8E3FFF',
    white: '#FFFFFF',
    hintTextColor: '#9E9E9E',
    iconBackground: '#E9E9E9',

    lightTextColor: '#525252',
    primary_light: '#F3D6FD',
    backgroundColor: '#F2F2F2',
}

export default Colors;

const addOpacity = (color: string, opacity: number): string => {
    const normalizedOpacity = Math.max(0, Math.min(opacity, 1));
   
    const [r, g, b] = color.match(/\w\w/g)?.map((hex) => parseInt(hex, 16)) || [0, 0, 0];
    
    return `rgba(${r}, ${g}, ${b}, ${normalizedOpacity})`;
};

export {addOpacity};