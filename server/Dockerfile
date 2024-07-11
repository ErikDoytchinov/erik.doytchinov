# Use the official Python image from the Docker Hub
FROM python:3.11

# Set the working directory in the container
WORKDIR /app

# Copy only the necessary files first
COPY pyproject.toml poetry.lock ./

# Install Poetry
RUN pip install poetry==1.8.3

# Intall poethepoet
RUN pip install poethepoet

# Install the dependencies
RUN poetry install --no-root

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which the FastAPI app will run
EXPOSE 8000

# Command to run the FastAPI app using Uvicorn
CMD ["poe", "run"]
