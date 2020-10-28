cd apps/finder
echo '{' > tsconfig.compodoc.json
echo '  "extends": "./tsconfig.json",' >> tsconfig.compodoc.json
echo '  "files": [' >> tsconfig.compodoc.json
for i in $(find src/ -name "*.ts")
do
   echo '    "'$i'",' >> tsconfig.compodoc.json
done
echo '  ],' >> tsconfig.compodoc.json
echo '}' >> tsconfig.compodoc.json
npx @compodoc/compodoc -p tsconfig.compodoc.json --output ../../documentation
cd ..
cd ..
compodoc -p apps/api/tsconfig.app.json --output documentationNest
compodoc -p tsconfig.base.json
compodoc -p tsconfig.base.json --output documentationNest

