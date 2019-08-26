# eslint-config-agata

ESLint config for Agata projects


### How to use

1. Put `eslint-config-agata` to your `package.json` file to `devDependencies` section
2. Run `npm install`
3. Add file .eslintrc.js to root folder(and to ./test folder if exists) of your repository
    1. For `node` projects
    ```javascript
        module.exports = {
            extends: 'iqoption',
            env: {
                node: true
            }
        };
    ```
    2. For frontend projects
    ```javascript
        module.exports = {
            extends: 'iqoption',
            env: {
                browser: true
            }
        };
    ```
    3. For `./test` folder
        ```javascript
            module.exports = {
                extends: 'iqoption',
                env: {
                    node: true,
                    mocha: true // or any other test framework you use
                }
            };
        ```
4. Run `eslint <folder or file name>`
5. Enjoy (or suffer)