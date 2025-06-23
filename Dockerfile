# Stage 1: Build the Spring Boot app
FROM maven:3.9-eclipse-temurin-17 AS builder

WORKDIR /build
COPY backend backend

WORKDIR /build/backend
RUN mvn clean package -DskipTests

# Stage 2: Run the app
FROM eclipse-temurin:17-jdk
WORKDIR /app

COPY --from=builder /build/backend/target/bugtracker-0.0.1-SNAPSHOT.jar app.jar

CMD ["java", "-jar", "app.jar"]
