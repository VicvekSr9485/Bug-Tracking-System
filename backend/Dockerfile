# Build the app using Maven
FROM maven:3.9-eclipse-temurin-17 AS builder

WORKDIR /app
COPY backend/pom.xml .
COPY backend/src ./src

RUN mvn clean package -DskipTests

# Run the app using a lightweight JDK image
FROM eclipse-temurin:17-jdk
WORKDIR /app

COPY --from=builder /app/target/bug-tracking-system-0.0.1-SNAPSHOT.jar app.jar

CMD ["java", "-jar", "app.jar"]
