FROM nginx:stable-alpine

# Copy the HTML, CSS, and JavaScript files into the container
COPY . /usr/share/nginx/html/

EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]