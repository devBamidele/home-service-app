// Create a formatter with the desired options
const dateFormatter = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
});

export default dateFormatter.format;
