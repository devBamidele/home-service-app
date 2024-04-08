interface Slider {
    id: string;
    name: string;
    image:  {
        url: string;
    }
}

interface SliderResponse {
    sliders: Slider[];
}
