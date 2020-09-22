const routeParamRegExp = /:[^/]+/g;

const replaceRouteParam = routeParams => (match) => {
    const replacement = match.substring(1);
    return routeParams[replacement];
};

const replaceRouteParams = (pathTemplate, routeParams) =>
    pathTemplate.replace(routeParamRegExp, replaceRouteParam(routeParams));

const validateRouteParams = (replacements, routeParams) => {
    replacements.forEach(replacement => {
        const value = routeParams[replacement];

        if (!Number.isInteger(value)
            && (typeof value !== 'string' || value === '')) {
            throw new Error(`routeParam replacement ${replacement} must be a non-empty string or integer`);
        }
    })
};

/**
 * Returns a route function.
 *
 * Ex: If the defined path template is /users/:userId and the resolution function is invoked with
 *  a routeParams object of { userId: 'abc123' }, the function would return "/users/abc123".
 *
 * @param {string} pathTemplate
 * @returns {function(object): string} A route path resolution function
 */
export const routeFnFactory = pathTemplate => {
    const replacements = Array.from(pathTemplate.matchAll(routeParamRegExp)).map(([match]) => match.substring(1));

    const pathResolverFn = (routeParams) => {
        if (!routeParams) {
            return pathTemplate;
        }

        process.env.NODE_ENV === 'development' && validateRouteParams(replacements, routeParams);

        return replaceRouteParams(pathTemplate, routeParams);
    };
    pathResolverFn.pathTemplate = pathTemplate;

    return replacements.length
        ? pathResolverFn
        : () => pathTemplate;
};
