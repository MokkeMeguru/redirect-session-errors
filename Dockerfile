FROM java:8-alpine
MAINTAINER Your Name <you@example.com>

ADD target/uberjar/redirect-session-errors.jar /redirect-session-errors/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/redirect-session-errors/app.jar"]
