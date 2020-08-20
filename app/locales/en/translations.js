import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
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
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
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
        'c-m-s': {
          caption: 'c-m-s',
          title: 'c-m-s',
          'i-i-s-c-m-s-resource-l': {
            caption: 'i-i-s-c-m-s-resource-l',
            title: 'i-i-s-c-m-s-resource-l'
          },
          'i-i-s-c-m-s-competence-l': {
            caption: 'i-i-s-c-m-s-competence-l',
            title: 'i-i-s-c-m-s-competence-l'
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
    'i-i-s-c-m-s-competence-l': IISCMSCompetenceLForm,
    'i-i-s-c-m-s-resource-l': IISCMSResourceLForm,
    'i-i-s-c-m-s-competence-e': IISCMSCompetenceEForm,
    'i-i-s-c-m-s-resource-e': IISCMSResourceEForm
  },

});

export default translations;
