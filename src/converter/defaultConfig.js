'use strict';

const defaultConfig = {
  bem: {
    elementSeparator: '__',
    modifierSeparator: '_'
  },
  rules: {
    default( token ) {
      return `.${token}`;
    },

    ' '( token, config, selector ) {
      if (endsWithModifier( selector, config.bem )) {
        return `${getSelectorWithoutModifier( selector, config.bem.modifierSeparator )}${config.bem.elementSeparator}${token}`;
      }

      return `${config.bem.elementSeparator}${token}`;
    },

    ':'( token, config ) {
      return `${config.bem.modifierSeparator}${token}`;
    }
  }
};

export default defaultConfig;