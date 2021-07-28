FROM golang:1.16-alpine3.14 AS builder

WORKDIR /app
COPY full-cycle-rocks.go go.mod ./

RUN go get -d -v ./... 
RUN go build -o /fullcyclerocks

FROM scratch

COPY --from=builder /fullcyclerocks /fullcyclerocks

ENTRYPOINT [ "/fullcyclerocks" ]