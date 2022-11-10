FROM maven:3-openjdk-18-slim AS build
WORKDIR /usr/local/ExpenseAPI
COPY src src
COPY pom.xml .
RUN mvn -f pom.xml clean package

FROM openjdk:18-jdk-slim-buster
RUN adduser --disabled-login appuser
USER appuser
COPY --from=build /usr/local/ExpenseAPI/target/ExpenseTracker-0.0.1-SNAPSHOT.jar /usr/local/ExpenseAPI/target/ExpenseAPI.jar
EXPOSE 8080
ENTRYPOINT ["java" , "-jar" , "usr/local/ExpenseAPI/target/ExpenseAPI.jar"]