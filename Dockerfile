# Stage 1: Build the JAR using Maven
FROM maven:3.9-eclipse-temurin-17 AS builder

WORKDIR /build
COPY backend/pom.xml backend/pom.xml
COPY backend/src backend/src

RUN mvn -f backend/pom.xml clean package -DskipTests

# Stage 2: Run the built JAR
FROM eclipse-temurin:17-jdk
WORKDIR /app

COPY --from=builder /build/backend/target/bug-tracking-system-0.0.1-SNAPSHOT.jar app.jar

CMD ["java", "-jar", "app.jar"]
