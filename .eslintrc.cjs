const tsRules = {
	'no-undef': 'off', // TypeScript already ensures we are not using non-existent variables.
	'no-unexpected-multiline': 'off', // This rule might interfere with prettier styling.
	// We disable the following rules to allow a more lean TypeScript code style.
	'@typescript-eslint/no-unsafe-member-access': 'off',
	'@typescript-eslint/no-unsafe-assignment': 'off',
	'@typescript-eslint/no-unsafe-argument': 'off',
	'@typescript-eslint/no-unsafe-call': 'off',
	'@typescript-eslint/explicit-function-return-type': 'off',
	'@typescript-eslint/explicit-module-boundary-types': 'off',
	'@typescript-eslint/no-inferrable-types': 'off',
	'@typescript-eslint/restrict-template-expressions': 'off',
	'@typescript-eslint/no-non-null-assertion': 'off',
	'@typescript-eslint/no-explicit-any': [
		'warn',
		{
			fixToUnknown: true,
			ignoreRestArgs: true,
		},
	],
}

module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
	ignorePatterns: ['node_modules/', '.nuxt/', '.output/'],
	overrides: [
		{
			files: ['*.ts'],
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
				'prettier', // We need to extend prettier again so that ts rules get disabled.
			],
			plugins: ['@typescript-eslint'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				project: '.nuxt/tsconfig.json',
			},
			rules: tsRules,
		},
		{
			files: ['*.vue'],
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
				'plugin:vue/vue3-recommended',
				'prettier', // We need to extend prettier again so that ts / vue rules get disabled.
			],
			parser: 'vue-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.vue'],
				ecmaVersion: 'latest',
				sourceType: 'module',
				project: '.nuxt/tsconfig.json',
				rules: tsRules,
			},
			rules: {
				...tsRules,
				// https://eslint.vuejs.org/rules/multi-word-component-names.html
				'vue/multi-word-component-names': 'off',
			},
		},
		{
			files: ['*.cjs'],
			env: {
				node: true,
				es2022: true,
			},
		},
	],
}
