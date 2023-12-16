import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'E hkspenriment2',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'E hkspenriment2',
          title: 'E hkspenriment2'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
