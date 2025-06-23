# OpenJDK base image
FROM eclipse-temurin:17-jdk

# Work directory
WORKDIR /app

# Copy the app JAR
COPY target/bug-tracking-system-0.0.1-SNAPSHOT.jar app.jar

# Run the JAR
CMD ["java", "-jar", "app.jar"]
