import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISCMSCompetenceLForm from './forms/i-i-s-c-m-s-competence-l';
import IISCMSResourceLForm from './forms/i-i-s-c-m-s-resource-l';
import IISCMSCompetenceEForm from './forms/i-i-s-c-m-s-competence-e';
import IISCMSResourceEForm from './forms/i-i-s-c-m-s-resource-e';
import IISCMSCompetenceResourceModel from './models/i-i-s-c-m-s-competence-resource';
import IISCMSCompetenceModel from './models/i-i-s-c-m-s-competence';
import IISCMSResourceModel from './models/i-i-s-c-m-s-resource';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-c-m-s-competence-resource': IISCMSCompetenceResourceModel,
    'i-i-s-c-m-s-competence': IISCMSCompetenceModel,
    'i-i-s-c-m-s-resource': IISCMSResourceModel
  },

  'application-name': 'CMS',

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
        'application-name': 'CMS',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'CMS',
          title: 'CMS'
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
        'c-m-s': {
          caption: 'CMS',
          title: 'CMS',
          'i-i-s-c-m-s-resource-l': {
            caption: 'Resource',
            title: ''
          },
          'i-i-s-c-m-s-competence-l': {
            caption: 'Competence',
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
    'i-i-s-c-m-s-competence-l': IISCMSCompetenceLForm,
    'i-i-s-c-m-s-resource-l': IISCMSResourceLForm,
    'i-i-s-c-m-s-competence-e': IISCMSCompetenceEForm,
    'i-i-s-c-m-s-resource-e': IISCMSResourceEForm
  },

});

export default translations;
