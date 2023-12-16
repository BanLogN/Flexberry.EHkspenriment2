import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISEHkspenriment2ПрайсLForm from './forms/i-i-s-e-hkspenriment2-прайс-l';
import IISEHkspenriment2СписокУслугLForm from './forms/i-i-s-e-hkspenriment2-список-услуг-l';
import IISEHkspenriment2УслугиLForm from './forms/i-i-s-e-hkspenriment2-услуги-l';
import IISEHkspenriment2ПрайсEForm from './forms/i-i-s-e-hkspenriment2-прайс-e';
import IISEHkspenriment2СписокУслугEForm from './forms/i-i-s-e-hkspenriment2-список-услуг-e';
import IISEHkspenriment2УслугиEForm from './forms/i-i-s-e-hkspenriment2-услуги-e';
import IISEHkspenriment2ПрайсModel from './models/i-i-s-e-hkspenriment2-прайс';
import IISEHkspenriment2СписокУслугModel from './models/i-i-s-e-hkspenriment2-список-услуг';
import IISEHkspenriment2УслугиModel from './models/i-i-s-e-hkspenriment2-услуги';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-e-hkspenriment2-прайс': IISEHkspenriment2ПрайсModel,
    'i-i-s-e-hkspenriment2-список-услуг': IISEHkspenriment2СписокУслугModel,
    'i-i-s-e-hkspenriment2-услуги': IISEHkspenriment2УслугиModel
  },

  'application-name': 'E hkspenriment2',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'E hkspenriment2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'E hkspenriment2',
          title: 'E hkspenriment2'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'e-hkspenriment2': {
          caption: 'EHkspenriment2',
          title: 'EHkspenriment2',
          'i-i-s-e-hkspenriment2-прайс-l': {
            caption: 'Прайс',
            title: ''
          },
          'i-i-s-e-hkspenriment2-услуги-l': {
            caption: 'Услуги',
            title: ''
          },
          'i-i-s-e-hkspenriment2-список-услуг-l': {
            caption: 'Список услуг',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-e-hkspenriment2-прайс-l': IISEHkspenriment2ПрайсLForm,
    'i-i-s-e-hkspenriment2-список-услуг-l': IISEHkspenriment2СписокУслугLForm,
    'i-i-s-e-hkspenriment2-услуги-l': IISEHkspenriment2УслугиLForm,
    'i-i-s-e-hkspenriment2-прайс-e': IISEHkspenriment2ПрайсEForm,
    'i-i-s-e-hkspenriment2-список-услуг-e': IISEHkspenriment2СписокУслугEForm,
    'i-i-s-e-hkspenriment2-услуги-e': IISEHkspenriment2УслугиEForm
  },

});

export default translations;
