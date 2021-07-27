FROM golang:1.16-alpine3.14 AS builder

WORKDIR /app
ADD . /app

RUN go get -d -v ./...

RUN go build -o /fullcyclerocks

FROM gcr.io/distroless/base

WORKDIR /

COPY --from=builder /fullcyclerocks /fullcyclerocks

EXPOSE 8080

ENTRYPOINT [ "/fullcyclerocks" ]