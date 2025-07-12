FROM alpine:latest
ARG BUILD_DATE
COPY app.sh /app.sh
RUN chmod +x /app.sh
ENTRYPOINT ["/app.sh"]
CMD ["--help"]