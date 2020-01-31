# Build runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:2.1
WORKDIR /app
COPY . .
CMD ASPNETCORE_URLS=http://*:$PORT dotnet "Garden Center.dll"