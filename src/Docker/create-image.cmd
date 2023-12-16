docker build --no-cache -f SQL\Dockerfile.PostgreSql -t ehkspenriment2/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t ehkspenriment2/app ../..
