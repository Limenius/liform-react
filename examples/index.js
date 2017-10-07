import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'
import Liform from '../src/'

const reducer = combineReducers({
    form: formReducer
})

// Contributors: This is a sandbox to play with liform-react without installing the package
let schema ={
    '$schema': 'http://json-schema.org/draft-04/schema#', 
    'additionalProperties': true, 
    'definitions': {
        'adhoc_wireless_settings': {
            'allOf': [
                {
                    'properties': {
                      'mode': {
                          'enum': [
                              'adhoc'
                          ]
                      }
                  }
                }, 
                {
                    '$ref': '#/definitions/base_wireless_settings'
                }, 
                {
                    '$ref': '#/definitions/ssid_wireless_property'
                }, 
                {
                    '$ref': '#/definitions/bssid_wireless_property'
                }, 
                {
                    '$ref': '#/definitions/encryption_wireless_property_mesh'
                }
            ], 
            'title': 'Adhoc'
        }, 
        'ap_wireless_settings': {
            'allOf': [
                {
                    'properties': {
                      'mode': {
                          'enum': [
                              'access_point'
                          ], 
                          'options': {
                              'enum_titles': [
                                  'access point'
                              ]
                          }
                      }
                  }
                }, 
                {
                    '$ref': '#/definitions/base_wireless_settings'
                }, 
                {
                    '$ref': '#/definitions/ssid_wireless_property'
                }, 
                {
                    '$ref': '#/definitions/hidden_wireless_property'
                }, 
                {
                    '$ref': '#/definitions/wds_wireless_property'
                }, 
                {
                    '$ref': '#/definitions/encryption_wireless_property_ap'
                }, 
                {
                    'properties': {
                      'isolate': {
                          'default': false, 
                          'description': 'isolate wireless clients from one another', 
                          'format': 'checkbox', 
                          'propertyOrder': 9, 
                          'title': 'isolate clients', 
                          'type': 'boolean'
                      }, 
                      'macfilter': {
                          'default': 'disable', 
                          'description': 'specifies the mac filter policy, "disable" to disable the filter, "allow" to treat it as whitelist or "deny" to treat it as blacklist', 
                          'enum': [
                              'disable', 
                              'allow', 
                              'deny'
                          ], 
                          'propertyOrder': 15, 
                          'title': 'MAC Filter', 
                          'type': 'string'
                      }, 
                      'maclist': {
                          'description': 'mac addresses that will be filtered according to the policy specified in the "macfilter" option', 
                          'items': {
                              'maxLength': 17, 
                              'minLength': 17, 
                              'pattern': '^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$', 
                              'title': 'MAC address', 
                              'type': 'string'
                          }, 
                          'propertyOrder': 16, 
                          'title': 'MAC List', 
                          'type': 'array'
                      }, 
                      'wmm': {
                          'default': true, 
                          'description': 'enables WMM (802.11e) support; required for 802.11n support', 
                          'format': 'checkbox', 
                          'propertyOrder': 8, 
                          'title': 'WMM (802.11e)', 
                          'type': 'boolean'
                      }
                  }
                }
            ], 
            'title': 'Access Point'
        }, 
        'base_address': {
            'additionalProperties': true, 
            'properties': {
                'family': {
                  'propertyOrder': 2, 
                  'type': 'string'
              }, 
                'proto': {
                  'propertyOrder': 1, 
                  'title': 'protocol', 
                  'type': 'string'
              }
            }, 
            'required': [
                'proto', 
                'family'
            ], 
            'type': 'object'
        }, 
        'base_radio_settings': {
            'additionalProperties': true, 
            'properties': {
                'channel': {
                  'propertyOrder': 4, 
                  'type': 'integer'
              }, 
                'channel_width': {
                  'propertyOrder': 5, 
                  'title': 'channel width (mhz)', 
                  'type': 'integer'
              }, 
                'country': {
                  'default': '00', 
                  'enum': [
                      '00', 
                      'AF', 
                      'AX', 
                      'AL', 
                      'DZ', 
                      'AS', 
                      'AD', 
                      'AO', 
                      'AI', 
                      'AQ', 
                      'AG', 
                      'AR', 
                      'AM', 
                      'AW', 
                      'AU', 
                      'AT', 
                      'AZ', 
                      'BS', 
                      'BH', 
                      'BD', 
                      'BB', 
                      'BY', 
                      'BE', 
                      'BZ', 
                      'BJ', 
                      'BM', 
                      'BT', 
                      'BO', 
                      'BA', 
                      'BW', 
                      'BV', 
                      'BR', 
                      'IO', 
                      'BN', 
                      'BG', 
                      'BF', 
                      'BI', 
                      'KH', 
                      'CM', 
                      'CA', 
                      'CV', 
                      'KY', 
                      'CF', 
                      'TD', 
                      'CL', 
                      'CN', 
                      'CX', 
                      'CC', 
                      'CO', 
                      'KM', 
                      'CG', 
                      'CD', 
                      'CK', 
                      'CR', 
                      'CI', 
                      'HR', 
                      'CU', 
                      'CY', 
                      'CZ', 
                      'DK', 
                      'DJ', 
                      'DM', 
                      'DO', 
                      'EC', 
                      'EG', 
                      'SV', 
                      'GQ', 
                      'ER', 
                      'EE', 
                      'ET', 
                      'FK', 
                      'FO', 
                      'FJ', 
                      'FI', 
                      'FR', 
                      'GF', 
                      'PF', 
                      'TF', 
                      'MK', 
                      'GA', 
                      'GM', 
                      'GE', 
                      'DE', 
                      'GH', 
                      'GI', 
                      'GR', 
                      'GL', 
                      'GD', 
                      'GP', 
                      'GU', 
                      'GT', 
                      'GG', 
                      'GN', 
                      'GW', 
                      'GY', 
                      'HT', 
                      'HM', 
                      'VA', 
                      'HN', 
                      'HK', 
                      'HU', 
                      'IS', 
                      'IN', 
                      'ID', 
                      'IR', 
                      'IQ', 
                      'IE', 
                      'IM', 
                      'IL', 
                      'IT', 
                      'JM', 
                      'JP', 
                      'JE', 
                      'JO', 
                      'KZ', 
                      'KE', 
                      'KI', 
                      'KP', 
                      'KR', 
                      'KW', 
                      'KG', 
                      'LA', 
                      'LV', 
                      'LB', 
                      'LS', 
                      'LR', 
                      'LY', 
                      'LI', 
                      'LT', 
                      'LU', 
                      'MO', 
                      'MG', 
                      'MW', 
                      'MY', 
                      'MV', 
                      'ML', 
                      'MT', 
                      'MH', 
                      'MQ', 
                      'MR', 
                      'MU', 
                      'YT', 
                      'MX', 
                      'FM', 
                      'MD', 
                      'MC', 
                      'MN', 
                      'MS', 
                      'MA', 
                      'MZ', 
                      'MM', 
                      'NA', 
                      'NR', 
                      'NP', 
                      'NL', 
                      'AN', 
                      'NC', 
                      'NZ', 
                      'NI', 
                      'NE', 
                      'NG', 
                      'NU', 
                      'NF', 
                      'MP', 
                      'NO', 
                      'OM', 
                      'PK', 
                      'PW', 
                      'PS', 
                      'PA', 
                      'PG', 
                      'PY', 
                      'PE', 
                      'PH', 
                      'PN', 
                      'PL', 
                      'PT', 
                      'PR', 
                      'QA', 
                      'RE', 
                      'RO', 
                      'RU', 
                      'RW', 
                      'SH', 
                      'KN', 
                      'LC', 
                      'PM', 
                      'VC', 
                      'WS', 
                      'SM', 
                      'ST', 
                      'SA', 
                      'SN', 
                      'CS', 
                      'SC', 
                      'SL', 
                      'SG', 
                      'SK', 
                      'SI', 
                      'SB', 
                      'SO', 
                      'ZA', 
                      'GS', 
                      'ES', 
                      'LK', 
                      'SD', 
                      'SR', 
                      'SJ', 
                      'SZ', 
                      'SE', 
                      'CH', 
                      'SY', 
                      'TW', 
                      'TJ', 
                      'TZ', 
                      'TH', 
                      'TL', 
                      'TG', 
                      'TK', 
                      'TO', 
                      'TT', 
                      'TN', 
                      'TR', 
                      'TM', 
                      'TC', 
                      'TV', 
                      'UG', 
                      'UA', 
                      'AE', 
                      'GB', 
                      'US', 
                      'UM', 
                      'UY', 
                      'UZ', 
                      'VU', 
                      'VE', 
                      'VN', 
                      'VG', 
                      'VI', 
                      'WF', 
                      'EH', 
                      'YE', 
                      'ZM', 
                      'ZW'
                  ], 
                  'maxLength': 2, 
                  'options': {
                      'enum_titles': [
                          'World', 
                          'Afghanistan', 
                          'Aland Islands', 
                          'Albania', 
                          'Algeria', 
                          'American Samoa', 
                          'AndorrA', 
                          'Angola', 
                          'Anguilla', 
                          'Antarctica', 
                          'Antigua and Barbuda', 
                          'Argentina', 
                          'Armenia', 
                          'Aruba', 
                          'Australia', 
                          'Austria', 
                          'Azerbaijan', 
                          'Bahamas', 
                          'Bahrain', 
                          'Bangladesh', 
                          'Barbados', 
                          'Belarus', 
                          'Belgium', 
                          'Belize', 
                          'Benin', 
                          'Bermuda', 
                          'Bhutan', 
                          'Bolivia', 
                          'Bosnia and Herzegovina', 
                          'Botswana', 
                          'Bouvet Island', 
                          'Brazil', 
                          'British Indian Ocean Territory', 
                          'Brunei Darussalam', 
                          'Bulgaria', 
                          'Burkina Faso', 
                          'Burundi', 
                          'Cambodia', 
                          'Cameroon', 
                          'Canada', 
                          'Cape Verde', 
                          'Cayman Islands', 
                          'Central African Republic', 
                          'Chad', 
                          'Chile', 
                          'China', 
                          'Christmas Island', 
                          'Cocos (Keeling) Islands', 
                          'Colombia', 
                          'Comoros', 
                          'Congo', 
                          'Congo, The Democratic Republic of the', 
                          'Cook Islands', 
                          'Costa Rica', 
                          "Cote D'Ivoire", 
                          'Croatia', 
                          'Cuba', 
                          'Cyprus', 
                          'Czech Republic', 
                          'Denmark', 
                          'Djibouti', 
                          'Dominica', 
                          'Dominican Republic', 
                          'Ecuador', 
                          'Egypt', 
                          'El Salvador', 
                          'Equatorial Guinea', 
                          'Eritrea', 
                          'Estonia', 
                          'Ethiopia', 
                          'Falkland Islands (Malvinas)', 
                          'Faroe Islands', 
                          'Fiji', 
                          'Finland', 
                          'France', 
                          'French Guiana', 
                          'French Polynesia', 
                          'French Southern Territories', 
                          'FYROM', 
                          'Gabon', 
                          'Gambia', 
                          'Georgia', 
                          'Germany', 
                          'Ghana', 
                          'Gibraltar', 
                          'Greece', 
                          'Greenland', 
                          'Grenada', 
                          'Guadeloupe', 
                          'Guam', 
                          'Guatemala', 
                          'Guernsey', 
                          'Guinea', 
                          'Guinea-Bissau', 
                          'Guyana', 
                          'Haiti', 
                          'Heard Island and Mcdonald Islands', 
                          'Holy See (Vatican City State)', 
                          'Honduras', 
                          'Hong Kong', 
                          'Hungary', 
                          'Iceland', 
                          'India', 
                          'Indonesia', 
                          'Iran, Islamic Republic Of', 
                          'Iraq', 
                          'Ireland', 
                          'Isle of Man', 
                          'Israel', 
                          'Italy', 
                          'Jamaica', 
                          'Japan', 
                          'Jersey', 
                          'Jordan', 
                          'Kazakhstan', 
                          'Kenya', 
                          'Kiribati', 
                          "Korea, Democratic People'S Republic of", 
                          'Korea, Republic of', 
                          'Kuwait', 
                          'Kyrgyzstan', 
                          "Lao People'S Democratic Republic", 
                          'Latvia', 
                          'Lebanon', 
                          'Lesotho', 
                          'Liberia', 
                          'Libyan Arab Jamahiriya', 
                          'Liechtenstein', 
                          'Lithuania', 
                          'Luxembourg', 
                          'Macao', 
                          'Madagascar', 
                          'Malawi', 
                          'Malaysia', 
                          'Maldives', 
                          'Mali', 
                          'Malta', 
                          'Marshall Islands', 
                          'Martinique', 
                          'Mauritania', 
                          'Mauritius', 
                          'Mayotte', 
                          'Mexico', 
                          'Micronesia, Federated States of', 
                          'Moldova, Republic of', 
                          'Monaco', 
                          'Mongolia', 
                          'Montserrat', 
                          'Morocco', 
                          'Mozambique', 
                          'Myanmar', 
                          'Namibia', 
                          'Nauru', 
                          'Nepal', 
                          'Netherlands', 
                          'Netherlands Antilles', 
                          'New Caledonia', 
                          'New Zealand', 
                          'Nicaragua', 
                          'Niger', 
                          'Nigeria', 
                          'Niue', 
                          'Norfolk Island', 
                          'Northern Mariana Islands', 
                          'Norway', 
                          'Oman', 
                          'Pakistan', 
                          'Palau', 
                          'Palestinian Territory, Occupied', 
                          'Panama', 
                          'Papua New Guinea', 
                          'Paraguay', 
                          'Peru', 
                          'Philippines', 
                          'Pitcairn', 
                          'Poland', 
                          'Portugal', 
                          'Puerto Rico', 
                          'Qatar', 
                          'Reunion', 
                          'Romania', 
                          'Russian Federation', 
                          'RWANDA', 
                          'Saint Helena', 
                          'Saint Kitts and Nevis', 
                          'Saint Lucia', 
                          'Saint Pierre and Miquelon', 
                          'Saint Vincent and the Grenadines', 
                          'Samoa', 
                          'San Marino', 
                          'Sao Tome and Principe', 
                          'Saudi Arabia', 
                          'Senegal', 
                          'Serbia and Montenegro', 
                          'Seychelles', 
                          'Sierra Leone', 
                          'Singapore', 
                          'Slovakia', 
                          'Slovenia', 
                          'Solomon Islands', 
                          'Somalia', 
                          'South Africa', 
                          'South Georgia and the South Sandwich Islands', 
                          'Spain', 
                          'Sri Lanka', 
                          'Sudan', 
                          'Suriname', 
                          'Svalbard and Jan Mayen', 
                          'Swaziland', 
                          'Sweden', 
                          'Switzerland', 
                          'Syrian Arab Republic', 
                          'Taiwan, Province of China', 
                          'Tajikistan', 
                          'Tanzania, United Republic of', 
                          'Thailand', 
                          'Timor-Leste', 
                          'Togo', 
                          'Tokelau', 
                          'Tonga', 
                          'Trinidad and Tobago', 
                          'Tunisia', 
                          'Turkey', 
                          'Turkmenistan', 
                          'Turks and Caicos Islands', 
                          'Tuvalu', 
                          'Uganda', 
                          'Ukraine', 
                          'United Arab Emirates', 
                          'United Kingdom', 
                          'United States', 
                          'United States Minor Outlying Islands', 
                          'Uruguay', 
                          'Uzbekistan', 
                          'Vanuatu', 
                          'Venezuela', 
                          'Viet Nam', 
                          'Virgin Islands, British', 
                          'Virgin Islands, U.S.', 
                          'Wallis and Futuna', 
                          'Western Sahara', 
                          'Yemen', 
                          'Zambia', 
                          'Zimbabwe'
                      ]
                  }, 
                  'propertyOrder': 7, 
                  'type': 'string'
              }, 
                'disabled': {
                  'default': false, 
                  'format': 'checkbox', 
                  'propertyOrder': 9, 
                  'type': 'boolean'
              }, 
                'driver': {
                  'enum': [
                      'mac80211', 
                      'madwifi', 
                      'ath5k', 
                      'ath9k', 
                      'broadcom'
                  ], 
                  'propertyOrder': 2, 
                  'type': 'string'
              }, 
                'name': {
                  'minLength': 3, 
                  'propertyOrder': 1, 
                  'type': 'string'
              }, 
                'phy': {
                  'propertyOrder': 3, 
                  'type': 'string'
              }, 
                'protocol': {
                  'propertyOrder': 2, 
                  'type': 'string'
              }, 
                'tx_power': {
                  'propertyOrder': 6, 
                  'title': 'transmit power (dbm)', 
                  'type': 'integer'
              }
            }, 
            'required': [
                'protocol', 
                'name', 
                'channel', 
                'channel_width', 
                'driver'
            ], 
            'type': 'object'
        }, 
        'base_wireless_settings': {
            'additionalProperties': true, 
            'properties': {
                'ack_distance': {
                  'description': 'distance to farthest network member in meters, if set to 0 this setting will be ignored', 
                  'minimum': 0, 
                  'propertyOrder': 10, 
                  'title': 'ACK distance', 
                  'type': 'integer'
              }, 
                'frag_threshold': {
                  'description': "override default fragmentation threshold, if set to 0 this setting won't be overridden", 
                  'maximum': 2346, 
                  'minimum': 0, 
                  'propertyOrder': 12, 
                  'title': 'fragmentation threshold', 
                  'type': 'integer'
              }, 
                'mode': {
                  'propertyOrder': 1, 
                  'type': 'string'
              }, 
                'radio': {
                  'description': 'reference to one of the elements defined in the "radios" section', 
                  'minLength': 2, 
                  'propertyOrder': 2, 
                  'type': 'string'
              }, 
                'rts_threshold': {
                  'description': "override RTS/CTS threshold, if set to 0 this setting won't be overridden", 
                  'maximum': 2346, 
                  'minimum': 0, 
                  'propertyOrder': 11, 
                  'title': 'RTS threshold', 
                  'type': 'integer'
              }
            }, 
            'propertyOrder': 8, 
            'required': [
                'radio', 
                'mode'
            ], 
            'title': 'Wireless Settings', 
            'type': 'object'
        }, 
        'bridge_interface': {
            'allOf': [
                {
                    'properties': {
                      'bridge_members': {
                          'items': {
                              '$ref': '#/definitions/interface_settings/properties/name', 
                              'title': 'bridged interface', 
                              'type': 'string'
                          }, 
                          'propertyOrder': 8, 
                          'title': 'Bridge Members', 
                          'type': 'array', 
                          'uniqueItems': true
                      }, 
                      'stp': {
                          'default': false, 
                          'description': 'enables the spanning tree protocol', 
                          'format': 'checkbox', 
                          'propertyOrder': 4, 
                          'title': 'STP enabled', 
                          'type': 'boolean'
                      }, 
                      'type': {
                          'enum': [
                              'bridge'
                          ], 
                          'propertyOrder': 1, 
                          'type': 'string'
                      }
                  }
                }, 
                {
                    '$ref': '#/definitions/interface_settings'
                }, 
                {
                    'properties': {
                      'igmp_snooping': {
                          'default': true, 
                          'description': 'sets the "multicast_snooping" kernel setting for a bridge', 
                          'format': 'checkbox', 
                          'propertyOrder': 4, 
                          'title': 'IGMP snooping', 
                          'type': 'boolean'
                      }
                  }
                }
            ], 
            'required': [
                'bridge_members'
            ], 
            'title': 'Bridge interface'
        }, 
        'bssid_wireless_property': {
            'properties': {
                'bssid': {
                  'maxLength': 17, 
                  'minLength': 17, 
                  'pattern': '^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$', 
                  'propertyOrder': 4, 
                  'title': 'BSSID', 
                  'type': 'string'
              }
            }, 
            'required': [
                'bssid'
            ]
        }, 
        'client': {
            'allOf': [
                {
                    '$ref': '#/definitions/tunnel'
                }, 
                {
                    'properties': {
                      'auth_user_pass': {
                          'description': 'Path to file containing username/password on 2 lines, only valid when using password authentication', 
                          'pattern': '^(\\S*)$', 
                          'propertyOrder': 40, 
                          'title': 'auth user pass', 
                          'type': 'string'
                      }, 
                      'mode': {
                          'enum': [
                              'p2p'
                          ]
                      }, 
                      'nobind': {
                          'default': true, 
                          'description': 'ports are dynamically selected', 
                          'format': 'checkbox', 
                          'propertyOrder': 5, 
                          'title': 'nobind', 
                          'type': 'boolean'
                      }, 
                      'ns_cert_type': {
                          'description': 'Require that peer certificate was signed with an explicit nsCertType designation of "server"', 
                          'enum': [
                              '', 
                              'server'
                          ], 
                          'options': {
                              'enum_titles': [
                                  'disabled', 
                                  'server'
                              ]
                          }
                      }, 
                      'port': {
                          'description': 'Use specific local port, ignored if nobind is enabled'
                      }, 
                      'proto': {
                          'default': 'udp', 
                          'enum': [
                              'udp', 
                              'tcp-client'
                          ], 
                          'options': {
                              'enum_titles': [
                                  'UDP', 
                                  'TCP'
                              ]
                          }
                      }, 
                      'pull': {
                          'default': true, 
                          'description': 'accept options pushed by the server, provided they are part of the legal set of pushable options', 
                          'format': 'checkbox', 
                          'propertyOrder': 11, 
                          'title': 'pull', 
                          'type': 'boolean'
                      }, 
                      'remote': {
                          'additionalItems': true, 
                          'items': {
                              'additionalProperties': false, 
                              'properties': {
                                  'host': {
                                      'format': 'hostname', 
                                      'maxLength': 63, 
                                      'minLength': 1, 
                                      'propertyOrder': 1, 
                                      'type': 'string'
                                  }, 
                                  'port': {
                                      'default': 1194, 
                                      'maximum': 65535, 
                                      'minimum': 1, 
                                      'propertyOrder': 2, 
                                      'type': 'integer'
                                  }
                              }, 
                              'required': [
                                  'host', 
                                  'port'
                              ], 
                              'title': 'remote', 
                              'type': 'object'
                          }, 
                          'minItems': 1, 
                          'propertyOrder': 8, 
                          'title': 'remote', 
                          'type': 'array'
                      }, 
                      'resolv_retry': {
                          'default': 'infinite', 
                          'description': "Retries to resolve hostname for the specified number of seconds. Set 'infinite' to retry indefinitely, set to 0 to disable", 
                          'pattern': '^(infinite)|([0-9])$', 
                          'propertyOrder': 9, 
                          'title': 'resolv-retry', 
                          'type': 'string'
                      }, 
                      'tls_client': {
                          'default': true, 
                          'description': 'Enable TLS authentication', 
                          'format': 'checkbox', 
                          'propertyOrder': 10, 
                          'title': 'TLS Client', 
                          'type': 'boolean'
                      }
                  }, 
                    'required': [
                      'remote'
                  ], 
                    'type': 'object'
                }
            ], 
            'title': 'Client'
        }, 
        'dhcp_address': {
            'allOf': [
                {
                    '$ref': '#/definitions/base_address'
                }, 
                {
                    'properties': {
                      'family': {
                          'enum': [
                              'ipv4', 
                              'ipv6'
                          ]
                      }, 
                      'proto': {
                          'enum': [
                              'dhcp'
                          ]
                      }
                  }, 
                    'type': 'object'
                }
            ], 
            'title': 'DHCP'
        }, 
        'encryption_base_settings': {
            'additionalProperties': true, 
            'properties': {
                'disabled': {
                  'default': false, 
                  'format': 'checkbox', 
                  'propertyOrder': 20, 
                  'type': 'boolean'
              }, 
                'key': {
                  'propertyOrder': 2, 
                  'type': 'string'
              }, 
                'protocol': {
                  'propertyOrder': 1, 
                  'title': 'encryption protocol', 
                  'type': 'string'
              }
            }, 
            'required': [
                'key'
            ]
        }, 
        'encryption_cipher_property': {
            'properties': {
                'cipher': {
                  'enum': [
                      'auto', 
                      'ccmp', 
                      'tkip', 
                      'tkip+ccmp'
                  ], 
                  'options': {
                      'enum_titles': [
                          'auto', 
                          'Force CCMP (AES)', 
                          'Force TKIP', 
                          'FORCE TKIP and CCMP (AES)'
                      ]
                  }, 
                  'propertyOrder': 3, 
                  'type': 'string'
              }
            }
        }, 
        'encryption_none': {
            'properties': {
                'protocol': {
                  'enum': [
                      'none'
                  ], 
                  'options': {
                      'enum_titles': [
                          'No encryption'
                      ]
                  }, 
                  'title': 'encryption protocol', 
                  'type': 'string'
              }
            }, 
            'title': 'No encryption'
        }, 
        'encryption_wep': {
            'allOf': [
                {
                    '$ref': '#/definitions/encryption_base_settings'
                }, 
                {
                    'properties': {
                      'key': {
                          'maxLength': 26, 
                          'minLength': 5
                      }, 
                      'protocol': {
                          'enum': [
                              'wep_open', 
                              'wep_shared'
                          ], 
                          'options': {
                              'enum_titles': [
                                  'WEP Open System', 
                                  'WEP Shared Key'
                              ]
                          }
                      }
                  }
                }
            ], 
            'description': 'WEP encryption is insecure and its use is discouraged.', 
            'title': 'WEP (Open System/Shared Key)'
        }, 
        'encryption_wireless_property_ap': {
            'properties': {
                'encryption': {
                  'oneOf': [
                      {
                          '$ref': '#/definitions/encryption_none'
                      }, 
                      {
                          '$ref': '#/definitions/encryption_wpa_personal'
                      }, 
                      {
                          '$ref': '#/definitions/encryption_wpa_enterprise_ap'
                      }, 
                      {
                          '$ref': '#/definitions/encryption_wps'
                      }, 
                      {
                          '$ref': '#/definitions/encryption_wep'
                      }
                  ], 
                  'propertyOrder': 20, 
                  'required': [
                      'protocol'
                  ], 
                  'title': 'Encryption', 
                  'type': 'object'
              }
            }
        }, 
        'encryption_wireless_property_mesh': {
            'properties': {
                'encryption': {
                  'oneOf': [
                      {
                          '$ref': '#/definitions/encryption_none'
                      }, 
                      {
                          '$ref': '#/definitions/encryption_wpa_personal'
                      }, 
                      {
                          '$ref': '#/definitions/encryption_wep'
                      }
                  ], 
                  'propertyOrder': 20, 
                  'required': [
                      'protocol'
                  ], 
                  'title': 'Encryption', 
                  'type': 'object'
              }
            }
        }, 
        'encryption_wireless_property_sta': {
            'properties': {
                'encryption': {
                  'oneOf': [
                      {
                          '$ref': '#/definitions/encryption_none'
                      }, 
                      {
                          '$ref': '#/definitions/encryption_wpa_personal'
                      }, 
                      {
                          '$ref': '#/definitions/encryption_wpa_enterprise_sta'
                      }, 
                      {
                          '$ref': '#/definitions/encryption_wep'
                      }
                  ], 
                  'propertyOrder': 20, 
                  'required': [
                      'protocol'
                  ], 
                  'title': 'Encryption', 
                  'type': 'object'
              }
            }
        }, 
        'encryption_wpa_enterprise_ap': {
            'allOf': [
                {
                    '$ref': '#/definitions/encryption_base_settings'
                }, 
                {
                    '$ref': '#/definitions/encryption_cipher_property'
                }, 
                {
                    '$ref': '#/definitions/encryption_wpa_enterprise_base_settings'
                }, 
                {
                    'properties': {
                      'acct_server': {
                          'propertyOrder': 7, 
                          'title': 'accounting server', 
                          'type': 'string'
                      }, 
                      'acct_server_port': {
                          'default': 1813, 
                          'propertyOrder': 8, 
                          'title': 'accounting port', 
                          'type': 'integer'
                      }, 
                      'key': {
                          'minLength': 4, 
                          'propertyOrder': 5, 
                          'title': 'shared secret'
                      }, 
                      'port': {
                          'default': 1812, 
                          'propertyOrder': 6, 
                          'title': 'radius port', 
                          'type': 'integer'
                      }, 
                      'server': {
                          'minLength': 3, 
                          'propertyOrder': 4, 
                          'title': 'radius server', 
                          'type': 'string'
                      }
                  }, 
                    'required': [
                      'server'
                  ]
                }
            ], 
            'title': 'WPA2/WPA Enterprise (access point)'
        }, 
        'encryption_wpa_enterprise_base_settings': {
            'properties': {
                'protocol': {
                  'enum': [
                      'wpa2_enterprise', 
                      'wpa_enterprise_mixed', 
                      'wpa_enterprise'
                  ], 
                  'options': {
                      'enum_titles': [
                          'WPA2 Enterprise', 
                          'WPA Enterprise Mixed Mode', 
                          'WPA Enterprise'
                      ]
                  }, 
                  'propertyOrder': 1, 
                  'title': 'encryption protocol', 
                  'type': 'string'
              }
            }
        }, 
        'encryption_wpa_enterprise_sta': {
            'additionalProperties': true, 
            'allOf': [
                {
                    '$ref': '#/definitions/encryption_cipher_property'
                }, 
                {
                    '$ref': '#/definitions/encryption_wpa_enterprise_base_settings'
                }, 
                {
                    'properties': {
                      'ca_cert': {
                          'propertyOrder': 7, 
                          'title': 'CA certificate (path)', 
                          'type': 'string'
                      }, 
                      'client_cert': {
                          'propertyOrder': 8, 
                          'title': 'client certificate (path)', 
                          'type': 'string'
                      }, 
                      'eap_type': {
                          'enum': [
                              'tls', 
                              'ttls'
                          ], 
                          'options': {
                              'enum_titles': [
                                  'EAP-TLS', 
                                  'EAP-PEAP'
                              ]
                          }, 
                          'propertyOrder': 4, 
                          'title': 'EAP protocol', 
                          'type': 'string'
                      }, 
                      'identity': {
                          'propertyOrder': 5, 
                          'type': 'string'
                      }, 
                      'password': {
                          'propertyOrder': 6, 
                          'type': 'string'
                      }, 
                      'priv_key': {
                          'propertyOrder': 9, 
                          'title': 'private key (path)', 
                          'type': 'string'
                      }, 
                      'priv_key_pwd': {
                          'propertyOrder': 10, 
                          'title': 'private key password', 
                          'type': 'string'
                      }
                  }
                }
            ], 
            'title': 'WPA2/WPA Enterprise (client)'
        }, 
        'encryption_wpa_personal': {
            'allOf': [
                {
                    '$ref': '#/definitions/encryption_base_settings'
                }, 
                {
                    '$ref': '#/definitions/encryption_cipher_property'
                }, 
                {
                    'properties': {
                      'key': {
                          'minLength': 8
                      }, 
                      'protocol': {
                          'enum': [
                              'wpa2_personal', 
                              'wpa_personal_mixed', 
                              'wpa_personal'
                          ], 
                          'options': {
                              'enum_titles': [
                                  'WPA2 Personal', 
                                  'WPA Personal Mixed Mode', 
                                  'WPA Personal'
                              ]
                          }
                      }
                  }
                }
            ], 
            'title': 'WPA2/WPA Personal'
        }, 
        'encryption_wps': {
            'additionalProperties': true, 
            'properties': {
                'protocol': {
                  'enum': [
                      'wps'
                  ], 
                  'options': {
                      'enum_titles': [
                          'WPS'
                      ]
                  }, 
                  'propertyOrder': 1, 
                  'title': 'encryption protocol', 
                  'type': 'string'
              }, 
                'wps_label': {
                  'default': false, 
                  'format': 'checkbox', 
                  'propertyOrder': 3, 
                  'title': 'label mode', 
                  'type': 'boolean'
              }, 
                'wps_pin': {
                  'propertyOrder': 4, 
                  'title': 'PIN', 
                  'type': 'string'
              }, 
                'wps_pushbutton': {
                  'default': false, 
                  'format': 'checkbox', 
                  'propertyOrder': 2, 
                  'title': 'push button mode', 
                  'type': 'boolean'
              }
            }, 
            'title': 'WPS (Wireless Protected Setup)'
        }, 
        'hidden_wireless_property': {
            'properties': {
                'hidden': {
                  'default': false, 
                  'format': 'checkbox', 
                  'propertyOrder': 4, 
                  'title': 'hide SSID', 
                  'type': 'boolean'
              }
            }
        }, 
        'interface_settings': {
            'additionalProperties': true, 
            'properties': {
                'addresses': {
                  'additionalItems': true, 
                  'items': {
                      'oneOf': [
                          {
                              '$ref': '#/definitions/dhcp_address'
                          }, 
                          {
                              '$ref': '#/definitions/ipv4_address'
                          }, 
                          {
                              '$ref': '#/definitions/ipv6_address'
                          }
                      ], 
                      'title': 'Address'
                  }, 
                  'propertyOrder': 20, 
                  'title': 'Addresses', 
                  'type': 'array', 
                  'uniqueItems': true
              }, 
                'autostart': {
                  'default': true, 
                  'description': 'bring up interface on boot', 
                  'format': 'checkbox', 
                  'propertyOrder': 5, 
                  'title': 'auto start', 
                  'type': 'boolean'
              }, 
                'disabled': {
                  'default': false, 
                  'description': 'disable this interface without deleting its configuration', 
                  'format': 'checkbox', 
                  'propertyOrder': 6, 
                  'type': 'boolean'
              }, 
                'mac': {
                  'description': 'if specified overrides default macaddress for this interface', 
                  'maxLength': 17, 
                  'pattern': '^(([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})|)$', 
                  'propertyOrder': 3, 
                  'title': 'MAC address', 
                  'type': 'string'
              }, 
                'mtu': {
                  'default': 1500, 
                  'minimum': 68, 
                  'propertyOrder': 2, 
                  'title': 'MTU', 
                  'type': 'integer'
              }, 
                'name': {
                  'maxLength': 15, 
                  'minLength': 2, 
                  'pattern': '^[^\\s]*$', 
                  'propertyOrder': 0, 
                  'type': 'string'
              }, 
                'network': {
                  'description': 'logical interface name in UCI (OpenWRT configuration format), will be automatically generated if left blank', 
                  'maxLength': 15, 
                  'pattern': '^[a-zA-z0-9_\\.\\-]*$', 
                  'propertyOrder': 7, 
                  'type': 'string'
              }
            }, 
            'required': [
                'name', 
                'type'
            ], 
            'title': 'Interface settings', 
            'type': 'object'
        }, 
        'ipv4_address': {
            'allOf': [
                {
                    '$ref': '#/definitions/base_address'
                }, 
                {
                    '$ref': '#/definitions/static_address'
                }, 
                {
                    'properties': {
                      'address': {
                          'format': 'ipv4', 
                          'maxLength': 15, 
                          'minLength': 7, 
                          'title': 'ipv4 address'
                      }, 
                      'family': {
                          'enum': [
                              'ipv4'
                          ]
                      }, 
                      'gateway': {
                          'description': 'optional ipv4 gateway', 
                          'maxLength': 16, 
                          'title': 'ipv4 gateway'
                      }, 
                      'mask': {
                          'default': 24, 
                          'maxmium': 32, 
                          'minimum': 8
                      }, 
                      'proto': {
                          'enum': [
                              'static'
                          ]
                      }
                  }, 
                    'type': 'object'
                }
            ], 
            'title': 'ipv4'
        }, 
        'ipv6_address': {
            'allOf': [
                {
                    '$ref': '#/definitions/base_address'
                }, 
                {
                    '$ref': '#/definitions/static_address'
                }, 
                {
                    'properties': {
                      'address': {
                          'format': 'ipv6', 
                          'maxLength': 45, 
                          'minLength': 3, 
                          'propertyOrder': 3, 
                          'title': 'ipv6 address'
                      }, 
                      'family': {
                          'enum': [
                              'ipv6'
                          ]
                      }, 
                      'gateway': {
                          'description': 'optional ipv6 gateway', 
                          'maxLength': 45, 
                          'title': 'ipv6 gateway'
                      }, 
                      'mask': {
                          'default': 64, 
                          'maxmium': 128, 
                          'minimum': 4
                      }, 
                      'proto': {
                          'enum': [
                              'static'
                          ]
                      }
                  }, 
                    'required': [
                      'address', 
                      'mask'
                  ], 
                    'type': 'object'
                }
            ], 
            'title': 'ipv6'
        }, 
        'mesh_id_wireless_property': {
            'properties': {
                'mesh_id': {
                  'description': '802.11 mesh ID: if set, the wireless interface will join this mesh network', 
                  'pattern': '^[^\\s]*$', 
                  'propertyOrder': 3, 
                  'title': 'mesh ID', 
                  'type': 'string'
              }
            }, 
            'required': [
                'mesh_id'
            ]
        }, 
        'mesh_wireless_settings': {
            'allOf': [
                {
                    'properties': {
                      'mode': {
                          'enum': [
                              '802.11s'
                          ], 
                          'options': {
                              'enum_titles': [
                                  '802.11s (mesh)'
                              ]
                          }
                      }
                  }
                }, 
                {
                    '$ref': '#/definitions/base_wireless_settings'
                }, 
                {
                    '$ref': '#/definitions/mesh_id_wireless_property'
                }, 
                {
                    '$ref': '#/definitions/encryption_wireless_property_mesh'
                }
            ], 
            'title': '802.11s (mesh)'
        }, 
        'monitor_wireless_settings': {
            'allOf': [
                {
                    'properties': {
                      'mode': {
                          'enum': [
                              'monitor'
                          ]
                      }
                  }
                }, 
                {
                    '$ref': '#/definitions/base_wireless_settings'
                }
            ], 
            'title': 'Monitor'
        }, 
        'network_interface': {
            'allOf': [
                {
                    'properties': {
                      'type': {
                          'enum': [
                              'ethernet', 
                              'virtual', 
                              'loopback', 
                              'other'
                          ], 
                          'propertyOrder': 1, 
                          'type': 'string'
                      }
                  }
                }, 
                {
                    '$ref': '#/definitions/interface_settings'
                }
            ], 
            'title': 'Network interface'
        }, 
        'radio_2and5_channels': {
            'properties': {
                'channel': {
                  'enum': [
                      0, 
                      1, 
                      2, 
                      3, 
                      4, 
                      5, 
                      6, 
                      7, 
                      8, 
                      9, 
                      10, 
                      11, 
                      12, 
                      13, 
                      36, 
                      40, 
                      44, 
                      48, 
                      52, 
                      56, 
                      60, 
                      64, 
                      100, 
                      104, 
                      108, 
                      112, 
                      116, 
                      120, 
                      124, 
                      128, 
                      132, 
                      136, 
                      140
                  ], 
                  'options': {
                      'enum_titles': [
                          'auto'
                      ]
                  }
              }
            }
        }, 
        'radio_2ghz_channels': {
            'properties': {
                'channel': {
                  'enum': [
                      0, 
                      1, 
                      2, 
                      3, 
                      4, 
                      5, 
                      6, 
                      7, 
                      8, 
                      9, 
                      10, 
                      11, 
                      12, 
                      13
                  ], 
                  'options': {
                      'enum_titles': [
                          'auto'
                      ]
                  }
              }
            }
        }, 
        'radio_5ghz_channels': {
            'properties': {
                'channel': {
                  'enum': [
                      0, 
                      36, 
                      40, 
                      44, 
                      48, 
                      52, 
                      56, 
                      60, 
                      64, 
                      100, 
                      104, 
                      108, 
                      112, 
                      116, 
                      120, 
                      124, 
                      128, 
                      132, 
                      136, 
                      140
                  ], 
                  'options': {
                      'enum_titles': [
                          'auto'
                      ]
                  }
              }
            }
        }, 
        'radio_80211a_settings': {
            'allOf': [
                {
                    'properties': {
                      'protocol': {
                          'enum': [
                              '802.11a'
                          ]
                      }
                  }
                }, 
                {
                    '$ref': '#/definitions/base_radio_settings'
                }, 
                {
                    '$ref': '#/definitions/radio_5ghz_channels'
                }, 
                {
                    '$ref': '#/definitions/radio_legacy_channel_width'
                }
            ], 
            'title': '802.11a (5 GHz legacy)'
        }, 
        'radio_80211ac_2ghz_settings': {
            'allOf': [
                {
                    'properties': {
                      'protocol': {
                          'enum': [
                              '802.11ac'
                          ]
                      }
                  }
                }, 
                {
                    '$ref': '#/definitions/base_radio_settings'
                }, 
                {
                    '$ref': '#/definitions/radio_2ghz_channels'
                }, 
                {
                    '$ref': '#/definitions/radio_ac_channel_width'
                }, 
                {
                    '$ref': '#/definitions/radio_hwmode_11g'
                }
            ], 
            'title': '802.11ac (2.4 GHz AC)'
        }, 
        'radio_80211ac_5ghz_settings': {
            'allOf': [
                {
                    'properties': {
                      'protocol': {
                          'enum': [
                              '802.11ac'
                          ]
                      }
                  }
                }, 
                {
                    '$ref': '#/definitions/base_radio_settings'
                }, 
                {
                    '$ref': '#/definitions/radio_5ghz_channels'
                }, 
                {
                    '$ref': '#/definitions/radio_ac_channel_width'
                }, 
                {
                    '$ref': '#/definitions/radio_hwmode_11a'
                }
            ], 
            'title': '802.11ac (5 GHz AC)'
        }, 
        'radio_80211an_settings': {
            'allOf': [
                {
                    'properties': {
                      'protocol': {
                          'enum': [
                              '802.11n'
                          ]
                      }
                  }
                }, 
                {
                    '$ref': '#/definitions/base_radio_settings'
                }, 
                {
                    '$ref': '#/definitions/radio_5ghz_channels'
                }, 
                {
                    '$ref': '#/definitions/radio_n_channel_width'
                }, 
                {
                    '$ref': '#/definitions/radio_hwmode_11a'
                }
            ], 
            'title': '802.11n (5 GHz N)'
        }, 
        'radio_80211bg_settings': {
            'allOf': [
                {
                    'properties': {
                      'protocol': {
                          'enum': [
                              '802.11b', 
                              '802.11g'
                          ]
                      }
                  }
                }, 
                {
                    '$ref': '#/definitions/base_radio_settings'
                }, 
                {
                    '$ref': '#/definitions/radio_2ghz_channels'
                }, 
                {
                    '$ref': '#/definitions/radio_legacy_channel_width'
                }
            ], 
            'title': '802.11b/g (2.4 GHz legacy)'
        }, 
        'radio_80211gn_settings': {
            'allOf': [
                {
                    'properties': {
                      'protocol': {
                          'enum': [
                              '802.11n'
                          ]
                      }
                  }
                }, 
                {
                    '$ref': '#/definitions/base_radio_settings'
                }, 
                {
                    '$ref': '#/definitions/radio_2ghz_channels'
                }, 
                {
                    '$ref': '#/definitions/radio_n_channel_width'
                }, 
                {
                    '$ref': '#/definitions/radio_hwmode_11g'
                }
            ], 
            'title': '802.11n (2.4 GHz N)'
        }, 
        'radio_ac_channel_width': {
            'properties': {
                'channel_width': {
                  'enum': [
                      20, 
                      40, 
                      80, 
                      160
                  ]
              }
            }
        }, 
        'radio_hwmode_11a': {
            'properties': {
                'hwmode': {
                  'default': '11a', 
                  'enum': [
                      '11a'
                  ], 
                  'propertyOrder': 8, 
                  'readOnly': true, 
                  'title': 'hardware mode', 
                  'type': 'string'
              }
            }
        }, 
        'radio_hwmode_11g': {
            'properties': {
                'hwmode': {
                  'default': '11g', 
                  'enum': [
                      '11g'
                  ], 
                  'propertyOrder': 8, 
                  'readOnly': true, 
                  'title': 'hardware mode', 
                  'type': 'string'
              }
            }
        }, 
        'radio_legacy_channel_width': {
            'properties': {
                'channel_width': {
                  'enum': [
                      20
                  ]
              }
            }
        }, 
        'radio_n_channel_width': {
            'properties': {
                'channel_width': {
                  'enum': [
                      20, 
                      40
                  ]
              }
            }
        }, 
        'server': {
            'properties': {
                'auth_user_pass_verify': {
                  'description': 'Command and method used for password authentication. If set requires the client to provide username and password', 
                  'pattern': '^((\\S*) (\\S*)|)$', 
                  'propertyOrder': 45, 
                  'title': 'auth user pass verify', 
                  'type': 'string'
              }, 
                'client_cert_not_required': {
                  'default': false, 
                  'description': "Don't require client certificate, client will authenticate using username/password only", 
                  'format': 'checkbox', 
                  'propertyOrder': 43, 
                  'title': 'client cert not required', 
                  'type': 'boolean'
              }, 
                'client_to_client': {
                  'default': false, 
                  'description': 'Enable client to client communication', 
                  'format': 'checkbox', 
                  'propertyOrder': 42, 
                  'title': 'client to client', 
                  'type': 'boolean'
              }, 
                'crl_verify': {
                  'description': 'Path to CRL file in PEM format', 
                  'pattern': '^(\\S*)$', 
                  'propertyOrder': 18, 
                  'title': 'CRL', 
                  'type': 'string'
              }, 
                'dh': {
                  'description': 'Path to file containing Diffie Hellman parameters in PEM format, required only in TLS-server mode', 
                  'propertyOrder': 17, 
                  'title': 'DH', 
                  'type': 'string'
              }, 
                'duplicate_cn': {
                  'default': false, 
                  'description': 'Allow multiple clients with the same common name to concurrently connect', 
                  'format': 'checkbox', 
                  'propertyOrder': 41, 
                  'title': 'duplicate cn', 
                  'type': 'boolean'
              }, 
                'mode': {
                  'enum': [
                      'server'
                  ]
              }, 
                'ns_cert_type': {
                  'description': 'Require that peer certificate was signed with an explicit nsCertType designation of "client"', 
                  'enum': [
                      '', 
                      'client'
                  ], 
                  'options': {
                      'enum_titles': [
                          'disabled', 
                          'client'
                      ]
                  }
              }, 
                'proto': {
                  'default': 'udp', 
                  'enum': [
                      'udp', 
                      'tcp-server'
                  ], 
                  'options': {
                      'enum_titles': [
                          'UDP', 
                          'TCP'
                      ]
                  }
              }, 
                'tls_server': {
                  'default': true, 
                  'description': 'Enable TLS authentication', 
                  'format': 'checkbox', 
                  'propertyOrder': 10, 
                  'title': 'TLS Server', 
                  'type': 'boolean'
              }, 
                'topology': {
                  'default': 'subnet', 
                  'description': 'Configure virtual addressing topology when running in tun mode. This directive has no meaning in tap mode, which always uses a subnet topology.', 
                  'enum': [
                      'net30', 
                      'p2p', 
                      'subnet'
                  ], 
                  'propertyOrder': 7, 
                  'title': 'topology', 
                  'type': 'string'
              }, 
                'username_as_common_name': {
                  'default': false, 
                  'description': 'Valid only for password authentication, use the authenticated username as the common name', 
                  'format': 'checkbox', 
                  'propertyOrder': 44, 
                  'title': 'username as cn', 
                  'type': 'boolean'
              }
            }, 
            'title': 'Server', 
            'type': 'object'
        }, 
        'server_bridged': {
            'allOf': [
                {
                    'properties': {
                      'server_bridge': {
                          'description': 'Example usage: "10.8.0.4 255.255.255.0 10.8.0.128 10.8.0.254". If server-bridge is used without any parameters, it will enable a DHCP-proxy mode, where connecting OpenVPN clients will receive an IP address for their TAP adapter from the DHCP server running on the OpenVPN server-side LAN. Note that only clients that support the binding of a DHCP client with the TAP adapter (such as Windows) can support this mode. The optional nogw flag (advanced) indicates that gateway information should not be pushed to the client', 
                          'propertyOrder': 1, 
                          'title': 'server-bridge', 
                          'type': 'string'
                      }
                  }, 
                    'required': [
                      'server_bridge'
                  ], 
                    'type': 'object'
                }, 
                {
                    '$ref': '#/definitions/tunnel'
                }, 
                {
                    '$ref': '#/definitions/server'
                }
            ], 
            'title': 'Server (bridged)'
        }, 
        'server_manual': {
            'allOf': [
                {
                    '$ref': '#/definitions/tunnel'
                }, 
                {
                    '$ref': '#/definitions/server'
                }, 
                {
                    'not': {
                      'required': [
                          'server'
                      ]
                  }
                }, 
                {
                    'not': {
                      'required': [
                          'server_bridge'
                      ]
                  }
                }
            ], 
            'title': 'Server (manual)'
        }, 
        'server_routed': {
            'allOf': [
                {
                    'properties': {
                      'server': {
                          'description': 'Example usage: "10.8.0.0 255.255.255.0". This directive will set up an OpenVPN server which will allocate addresses to clients out of the given network/netmask. The server itself will take the ".1" address of the given network for use as the server-side endpoint of the local TUN/TAP interface.', 
                          'minLength': 15, 
                          'propertyOrder': 1, 
                          'title': 'server', 
                          'type': 'string'
                      }
                  }, 
                    'required': [
                      'server'
                  ], 
                    'type': 'object'
                }, 
                {
                    '$ref': '#/definitions/tunnel'
                }, 
                {
                    '$ref': '#/definitions/server'
                }
            ], 
            'title': 'Server (routed)'
        }, 
        'ssid_wireless_property': {
            'properties': {
                'ssid': {
                  'maxLength': 32, 
                  'propertyOrder': 3, 
                  'title': 'SSID', 
                  'type': 'string'
              }
            }, 
            'required': [
                'ssid'
            ]
        }, 
        'sta_wireless_settings': {
            'allOf': [
                {
                    'properties': {
                      'mode': {
                          'enum': [
                              'station'
                          ]
                      }
                  }
                }, 
                {
                    '$ref': '#/definitions/base_wireless_settings'
                }, 
                {
                    '$ref': '#/definitions/ssid_wireless_property'
                }, 
                {
                    '$ref': '#/definitions/bssid_wireless_property'
                }, 
                {
                    '$ref': '#/definitions/wds_wireless_property'
                }, 
                {
                    '$ref': '#/definitions/encryption_wireless_property_sta'
                }
            ], 
            'title': 'Station'
        }, 
        'static_address': {
            'properties': {
                'address': {
                  'propertyOrder': 3, 
                  'type': 'string'
              }, 
                'gateway': {
                  'propertyOrder': 5, 
                  'type': 'string'
              }, 
                'mask': {
                  'propertyOrder': 4, 
                  'type': 'integer'
              }
            }, 
            'required': [
                'address', 
                'mask'
            ]
        }, 
        'tunnel': {
            'properties': {
                'auth': {
                  'default': 'SHA1', 
                  'enum': [
                      'DSA', 
                      'DSA-SHA', 
                      'DSA-SHA1', 
                      'DSA-SHA1-old', 
                      'MD4', 
                      'MD5', 
                      'MDC2', 
                      'RIPEMD160', 
                      'RSA-MD4', 
                      'RSA-MD5', 
                      'RSA-MDC2', 
                      'RSA-RIPEMD160', 
                      'RSA-SHA', 
                      'RSA-SHA1', 
                      'RSA-SHA1-2', 
                      'RSA-SHA224', 
                      'RSA-SHA256', 
                      'RSA-SHA384', 
                      'RSA-SHA512', 
                      'SHA', 
                      'SHA1', 
                      'SHA224', 
                      'SHA256', 
                      'SHA384', 
                      'SHA512', 
                      'ecdsa-with-SHA1', 
                      'whirlpool', 
                      'none'
                  ], 
                  'propertyOrder': 11, 
                  'title': 'auth digest algorithm', 
                  'type': 'string'
              }, 
                'ca': {
                  'description': 'Path to Certificate authority (CA) file in PEM format', 
                  'pattern': '^(\\S*)$', 
                  'propertyOrder': 14, 
                  'title': 'CA', 
                  'type': 'string'
              }, 
                'cert': {
                  'description': "Path to local peer's signed certificate in PEM format. Must be signed by a certificate authority whose certificate is specified in the CA option", 
                  'pattern': '^(\\S*)$', 
                  'propertyOrder': 15, 
                  'title': 'cert', 
                  'type': 'string'
              }, 
                'cipher': {
                  'default': 'BF-CBC', 
                  'description': 'Encrypt data channel packets with cipher algorithm', 
                  'enum': [
                      'AES-128-CBC', 
                      'AES-128-CFB', 
                      'AES-128-CFB1', 
                      'AES-128-CFB8', 
                      'AES-128-OFB', 
                      'AES-192-CBC', 
                      'AES-192-CFB', 
                      'AES-192-CFB1', 
                      'AES-192-CFB8', 
                      'AES-192-OFB', 
                      'AES-256-CBC', 
                      'AES-256-CFB', 
                      'AES-256-CFB1', 
                      'AES-256-CFB8', 
                      'AES-256-OFB', 
                      'BF-CBC', 
                      'BF-CFB', 
                      'BF-OFB', 
                      'CAMELLIA-128-CBC', 
                      'CAMELLIA-128-CFB1', 
                      'CAMELLIA-128-CFB8', 
                      'CAMELLIA-128-OFB', 
                      'CAMELLIA-192-CBC', 
                      'CAMELLIA-192-CFB', 
                      'CAMELLIA-192-CFB1', 
                      'CAMELLIA-192-CFB8', 
                      'CAMELLIA-192-OFB', 
                      'CAMELLIA-256-CBC', 
                      'none'
                  ], 
                  'propertyOrder': 12, 
                  'title': 'cipher', 
                  'type': 'string'
              }, 
                'comp_lzo': {
                  'default': 'adaptive', 
                  'description': 'Use fast LZO compression; may add up to 1 byte per packet for incompressible data', 
                  'enum': [
                      'yes', 
                      'no', 
                      'adaptive'
                  ], 
                  'propertyOrder': 9, 
                  'title': 'LZO compression', 
                  'type': 'string'
              }, 
                'dev': {
                  'description': 'VPN interface name', 
                  'maxLength': 15, 
                  'minLength': 2, 
                  'pattern': '^[^\\s]*$', 
                  'propertyOrder': 6, 
                  'title': 'device name', 
                  'type': 'string'
              }, 
                'dev_type': {
                  'description': 'tun (layer3) or tap (layer2)', 
                  'enum': [
                      'tun', 
                      'tap'
                  ], 
                  'propertyOrder': 5, 
                  'title': 'device type', 
                  'type': 'string'
              }, 
                'disabled': {
                  'default': false, 
                  'description': 'disable this VPN without deleting its configuration', 
                  'format': 'checkbox', 
                  'propertyOrder': 1, 
                  'title': 'disabled', 
                  'type': 'boolean'
              }, 
                'down': {
                  'description': 'Run command after a TUN/TAP device is closed', 
                  'pattern': '^(\\S*)$', 
                  'propertyOrder': 30, 
                  'title': 'down command', 
                  'type': 'string'
              }, 
                'engine': {
                  'default': '', 
                  'description': 'Enable OpenSSL hardware-based crypto engine functionality', 
                  'enum': [
                      '', 
                      'bsd', 
                      'rsax', 
                      'dynamic'
                  ], 
                  'options': {
                      'enum_titles': [
                          'No hardware crypto acceleration', 
                          'BSD cryptodev engine', 
                          'RSAX engine support', 
                          'Dynamic engine loading support'
                      ]
                  }, 
                  'propertyOrder': 13, 
                  'title': 'engine', 
                  'type': 'string'
              }, 
                'fast_io': {
                  'default': false, 
                  'description': '(Experimental) Optimize TUN/TAP/UDP I/O writes by avoiding a call to poll/epoll/select prior to the write operation', 
                  'format': 'checkbox', 
                  'propertyOrder': 50, 
                  'title': 'fast IO', 
                  'type': 'boolean'
              }, 
                'fragment': {
                  'default': 0, 
                  'description': 'Enable internal datagram fragmentation so that no UDP datagrams are sent which are larger than max bytes. 0 means disabled. Valid only when using UDP', 
                  'minimum': 0, 
                  'propertyOrder': 22, 
                  'title': 'fragment', 
                  'type': 'integer'
              }, 
                'group': {
                  'description': 'Change the group ID of the OpenVPN process to the speified group after initialization', 
                  'propertyOrder': 33, 
                  'title': 'group', 
                  'type': 'string'
              }, 
                'keepalive': {
                  'description': 'Two numbers separated by space. Refer to the OpenVPN manual pagefor more information', 
                  'pattern': '^(([0-9]*) ([0-9]*)|)$', 
                  'propertyOrder': 24, 
                  'title': 'keep alive', 
                  'type': 'string'
              }, 
                'key': {
                  'description': "Path to local peer's private key in PEM format. Use the private key which was generated when you built your peer's certificate", 
                  'pattern': '^(\\S*)$', 
                  'propertyOrder': 16, 
                  'title': 'key', 
                  'type': 'string'
              }, 
                'local': {
                  'description': 'Local hostname or IP address on which OpenVPN will listen to. If unspecified, OpenVPN will bind to all interfaces.', 
                  'propertyOrder': 8, 
                  'title': 'local', 
                  'type': 'string'
              }, 
                'log': {
                  'description': 'Output log messages to file, including output to stdout/stderr which is generated by called scripts', 
                  'pattern': '^(\\S*)$', 
                  'propertyOrder': 51, 
                  'title': 'log', 
                  'type': 'string'
              }, 
                'mode': {
                  'propertyOrder': 2, 
                  'title': 'mode', 
                  'type': 'string'
              }, 
                'mssfix': {
                  'default': 1450, 
                  'description': 'Announce to TCP sessions running over the tunnel that they should limit their send packet sizes such that after OpenVPN has encapsulated them, the resulting UDP packet size that OpenVPN sends to its peer will not exceed max bytes. Valid only when using UDP', 
                  'minimum': 0, 
                  'propertyOrder': 23, 
                  'title': 'mssfix', 
                  'type': 'integer'
              }, 
                'mtu_disc': {
                  'default': 'no', 
                  'enum': [
                      'no', 
                      'maybe', 
                      'yes'
                  ], 
                  'options': {
                      'enum_titles': [
                          'No - never send DF frames', 
                          'Maybe - Use per-route hints', 
                          'Yes - always DF'
                      ]
                  }, 
                  'propertyOrder': 20, 
                  'title': 'MTU discovery', 
                  'type': 'string'
              }, 
                'mtu_test': {
                  'default': false, 
                  'description': 'Empirically measures MTU on connection startup, can take up to 3 minutes to complete', 
                  'format': 'checkbox', 
                  'propertyOrder': 21, 
                  'title': 'MTU test', 
                  'type': 'boolean'
              }, 
                'mute': {
                  'default': 0, 
                  'description': 'limit repetitive logging of similar message types to max n occurrences', 
                  'minimum': 0, 
                  'propertyOrder': 34, 
                  'title': 'mute', 
                  'type': 'integer'
              }, 
                'mute_replay_warnings': {
                  'default': false, 
                  'description': 'Silence the output of replay warnings, which are a common false alarm on WiFi networks', 
                  'format': 'checkbox', 
                  'propertyOrder': 37, 
                  'title': 'mute replay warnings', 
                  'type': 'boolean'
              }, 
                'name': {
                  'description': 'descriptive name for internal use, (only alphanumeric characters, dashes and underscores allowed)', 
                  'maxLength': 24, 
                  'minLength': 2, 
                  'pattern': '^[0-9A-Za-z_-]*$', 
                  'propertyOrder': 0, 
                  'title': 'name', 
                  'type': 'string'
              }, 
                'ns_cert_type': {
                  'default': '', 
                  'propertyOrder': 19, 
                  'title': 'NS cert type', 
                  'type': 'string'
              }, 
                'persist_key': {
                  'default': false, 
                  'description': "Don't re-read key files across SIGUSR1 or ping-restarts", 
                  'format': 'checkbox', 
                  'propertyOrder': 26, 
                  'title': 'persist key', 
                  'type': 'boolean'
              }, 
                'persist_tun': {
                  'default': false, 
                  'description': "Don't close and reopen TUN/TAP device or run up/down scripts across SIGUSR1 or ping-restarts", 
                  'format': 'checkbox', 
                  'propertyOrder': 25, 
                  'title': 'persist tunnel', 
                  'type': 'boolean'
              }, 
                'port': {
                  'default': 1194, 
                  'maximum': 65535, 
                  'minimum': 1, 
                  'propertyOrder': 4, 
                  'title': 'port', 
                  'type': 'integer'
              }, 
                'proto': {
                  'propertyOrder': 3, 
                  'title': 'protocol', 
                  'type': 'string'
              }, 
                'script_security': {
                  'default': 1, 
                  'enum': [
                      0, 
                      1, 
                      2, 
                      3
                  ], 
                  'options': {
                      'enum_titles': [
                          '0 - Strictly no calling of external programs', 
                          '1 - Only call built-in executables such as ifconfig, ip, route, or netsh', 
                          '2 - Allow calling of built-in executables and user-defined scripts', 
                          '3 - Allow passwords to be passed to scripts via environmental variables (potentially unsafe)'
                      ]
                  }, 
                  'propertyOrder': 31, 
                  'title': 'script security', 
                  'type': 'integer'
              }, 
                'secret': {
                  'description': 'Path to key for Static Key encryption mode (non-TLS)', 
                  'pattern': '^(\\S*)$', 
                  'propertyOrder': 38, 
                  'title': 'secret', 
                  'type': 'string'
              }, 
                'status': {
                  'description': 'Write operational status to file every n seconds; eg: "/var/run/openvpn.status 10"', 
                  'pattern': '^((\\S*) ([0-9]*)|(\\S*)|)$', 
                  'propertyOrder': 35, 
                  'title': 'status file', 
                  'type': 'string'
              }, 
                'status_version': {
                  'default': 1, 
                  'description': 'Status file format version number. Defaults to 1', 
                  'enum': [
                      1, 
                      2, 
                      3
                  ], 
                  'propertyOrder': 36, 
                  'title': 'status version format', 
                  'type': 'integer'
              }, 
                'tun_ipv6': {
                  'default': false, 
                  'description': 'Build a tun link capable of forwarding IPv6 traffic', 
                  'format': 'checkbox', 
                  'propertyOrder': 27, 
                  'title': 'tun ipv6', 
                  'type': 'boolean'
              }, 
                'up': {
                  'description': 'Run command after successful TUN/TAP device open (pre user UID change)', 
                  'pattern': '^(\\S*)$', 
                  'propertyOrder': 28, 
                  'title': 'up command', 
                  'type': 'string'
              }, 
                'up_delay': {
                  'default': 0, 
                  'description': 'Delay TUN/TAP open and up script execution until after TCP/UDP connection establishment with peer', 
                  'minimum': 0, 
                  'propertyOrder': 29, 
                  'title': 'up delay', 
                  'type': 'integer'
              }, 
                'user': {
                  'description': 'Change the user ID of the OpenVPN process to the specified user after initialization, dropping privileges in the process', 
                  'propertyOrder': 32, 
                  'title': 'user', 
                  'type': 'string'
              }, 
                'verb': {
                  'default': 1, 
                  'description': 'Set output verbosity for logging and debugging', 
                  'enum': [
                      0, 
                      1, 
                      2, 
                      3, 
                      4, 
                      5, 
                      6, 
                      7, 
                      8, 
                      9, 
                      10, 
                      11
                  ], 
                  'options': {
                      'enum_titles': [
                          '0 - disabled', 
                          '1 - default', 
                          '2', 
                          '3 - recommended', 
                          '4', 
                          '5', 
                          '6', 
                          '7', 
                          '8', 
                          '9', 
                          '10', 
                          '11'
                      ]
                  }, 
                  'propertyOrder': 52, 
                  'title': 'verbosity', 
                  'type': 'integer'
              }
            }, 
            'required': [
                'name', 
                'mode', 
                'proto', 
                'dev'
            ], 
            'type': 'object'
        }, 
        'wds_wireless_property': {
            'properties': {
                'wds': {
                  'default': false, 
                  'description': 'enable wireless distribution system', 
                  'format': 'checkbox', 
                  'propertyOrder': 5, 
                  'title': 'WDS', 
                  'type': 'boolean'
              }
            }
        }, 
        'wireless_interface': {
            'allOf': [
                {
                    'properties': {
                      'type': {
                          'default': 'wireless', 
                          'enum': [
                              'wireless'
                          ], 
                          'propertyOrder': 1, 
                          'type': 'string'
                      }, 
                      'wireless': {
                          'oneOf': [
                              {
                                  '$ref': '#/definitions/ap_wireless_settings'
                              }, 
                              {
                                  '$ref': '#/definitions/sta_wireless_settings'
                              }, 
                              {
                                  '$ref': '#/definitions/adhoc_wireless_settings'
                              }, 
                              {
                                  '$ref': '#/definitions/monitor_wireless_settings'
                              }, 
                              {
                                  '$ref': '#/definitions/mesh_wireless_settings'
                              }
                          ], 
                          'propertyOrder': 10, 
                          'type': 'object'
                      }
                  }
                }, 
                {
                    '$ref': '#/definitions/interface_settings'
                }
            ], 
            'properties': {
                'wireless': {
                  'properties': {
                      'network': {
                          'additionalItems': true, 
                          'description': 'override OpenWRT "network" config option of of wifi-iface directive; will be automatically determined if left blank', 
                          'items': {
                              '$ref': '#/definitions/interface_settings/properties/network', 
                              'title': 'network', 
                              'type': 'string'
                          }, 
                          'propertyOrder': 19, 
                          'title': 'Attached Networks', 
                          'type': 'array', 
                          'uniqueItems': true
                      }
                  }
              }
            }, 
            'title': 'Wireless interface'
        }
    }, 
    'properties': {
        'dns_search': {
            'additionalItems': true, 
            'items': {
                'format': 'hostname', 
                'title': 'Domain', 
                'type': 'string'
            }, 
            'propertyOrder': 5, 
            'title': 'DNS Search Domains', 
            'type': 'array', 
            'uniqueItems': true
        }, 
        'dns_servers': {
            'additionalItems': true, 
            'items': {
                'title': 'DNS Server', 
                'type': 'string'
            }, 
            'propertyOrder': 4, 
            'title': 'DNS Configuration', 
            'type': 'array', 
            'uniqueItems': true
        }, 
        'files': {
            'additionalItems': true, 
            'items': {
                'additionalProperties': false, 
                'properties': {
                  'contents': {
                      'description': 'content (plain-text only)', 
                      'format': 'textarea', 
                      'propertyOrder': 3, 
                      'type': 'string'
                  }, 
                  'mode': {
                      'default': '0644', 
                      'description': 'filesystem permissions', 
                      'maxLength': 4, 
                      'minLength': 3, 
                      'pattern': '^[0-7]*$', 
                      'propertyOrder': 2, 
                      'type': 'string'
                  }, 
                  'path': {
                      'description': 'filesystem path', 
                      'propertyOrder': 1, 
                      'type': 'string'
                  }
              }, 
                'required': [
                  'path', 
                  'mode', 
                  'contents'
              ], 
                'title': 'File', 
                'type': 'object'
            }, 
            'propertyOrder': 20, 
            'title': 'Files', 
            'type': 'array', 
            'uniqueItems': true
        }, 
        'general': {
            'additionalProperties': true, 
            'properties': {
                'description': {
                  'description': 'description and notes', 
                  'propertyOrder': 4, 
                  'type': 'string'
              }, 
                'hostname': {
                  'format': 'hostname', 
                  'maxLength': 63, 
                  'minLength': 1, 
                  'propertyOrder': 1, 
                  'type': 'string'
              }, 
                'maintainer': {
                  'propertyOrder': 3, 
                  'type': 'string'
              }, 
                'timezone': {
                  'default': 'UTC', 
                  'enum': [
                      'UTC', 
                      'Africa/Abidjan', 
                      'Africa/Accra', 
                      'Africa/Addis Ababa', 
                      'Africa/Algiers', 
                      'Africa/Asmara', 
                      'Africa/Bamako', 
                      'Africa/Bangui', 
                      'Africa/Banjul', 
                      'Africa/Bissau', 
                      'Africa/Blantyre', 
                      'Africa/Brazzaville', 
                      'Africa/Bujumbura', 
                      'Africa/Casablanca', 
                      'Africa/Ceuta', 
                      'Africa/Conakry', 
                      'Africa/Dakar', 
                      'Africa/Dar es Salaam', 
                      'Africa/Djibouti', 
                      'Africa/Douala', 
                      'Africa/El Aaiun', 
                      'Africa/Freetown', 
                      'Africa/Gaborone', 
                      'Africa/Harare', 
                      'Africa/Johannesburg', 
                      'Africa/Kampala', 
                      'Africa/Khartoum', 
                      'Africa/Kigali', 
                      'Africa/Kinshasa', 
                      'Africa/Lagos', 
                      'Africa/Libreville', 
                      'Africa/Lome', 
                      'Africa/Luanda', 
                      'Africa/Lubumbashi', 
                      'Africa/Lusaka', 
                      'Africa/Malabo', 
                      'Africa/Maputo', 
                      'Africa/Maseru', 
                      'Africa/Mbabane', 
                      'Africa/Mogadishu', 
                      'Africa/Monrovia', 
                      'Africa/Nairobi', 
                      'Africa/Ndjamena', 
                      'Africa/Niamey', 
                      'Africa/Nouakchott', 
                      'Africa/Ouagadougou', 
                      'Africa/Porto-Novo', 
                      'Africa/Sao Tome', 
                      'Africa/Tripoli', 
                      'Africa/Tunis', 
                      'Africa/Windhoek', 
                      'America/Adak', 
                      'America/Anchorage', 
                      'America/Anguilla', 
                      'America/Antigua', 
                      'America/Araguaina', 
                      'America/Argentina/Buenos Aires', 
                      'America/Argentina/Catamarca', 
                      'America/Argentina/Cordoba', 
                      'America/Argentina/Jujuy', 
                      'America/Argentina/La Rioja', 
                      'America/Argentina/Mendoza', 
                      'America/Argentina/Rio Gallegos', 
                      'America/Argentina/Salta', 
                      'America/Argentina/San Juan', 
                      'America/Argentina/Tucuman', 
                      'America/Argentina/Ushuaia', 
                      'America/Aruba', 
                      'America/Asuncion', 
                      'America/Atikokan', 
                      'America/Bahia', 
                      'America/Barbados', 
                      'America/Belem', 
                      'America/Belize', 
                      'America/Blanc-Sablon', 
                      'America/Boa Vista', 
                      'America/Bogota', 
                      'America/Boise', 
                      'America/Cambridge Bay', 
                      'America/Campo Grande', 
                      'America/Cancun', 
                      'America/Caracas', 
                      'America/Cayenne', 
                      'America/Cayman', 
                      'America/Chicago', 
                      'America/Chihuahua', 
                      'America/Costa Rica', 
                      'America/Cuiaba', 
                      'America/Curacao', 
                      'America/Danmarkshavn', 
                      'America/Dawson', 
                      'America/Dawson Creek', 
                      'America/Denver', 
                      'America/Detroit', 
                      'America/Dominica', 
                      'America/Edmonton', 
                      'America/Eirunepe', 
                      'America/El Salvador', 
                      'America/Fortaleza', 
                      'America/Glace Bay', 
                      'America/Goose Bay', 
                      'America/Grand Turk', 
                      'America/Grenada', 
                      'America/Guadeloupe', 
                      'America/Guatemala', 
                      'America/Guayaquil', 
                      'America/Guyana', 
                      'America/Halifax', 
                      'America/Havana', 
                      'America/Hermosillo', 
                      'America/Indiana/Indianapolis', 
                      'America/Indiana/Knox', 
                      'America/Indiana/Marengo', 
                      'America/Indiana/Petersburg', 
                      'America/Indiana/Tell City', 
                      'America/Indiana/Vevay', 
                      'America/Indiana/Vincennes', 
                      'America/Indiana/Winamac', 
                      'America/Inuvik', 
                      'America/Iqaluit', 
                      'America/Jamaica', 
                      'America/Juneau', 
                      'America/Kentucky/Louisville', 
                      'America/Kentucky/Monticello', 
                      'America/La Paz', 
                      'America/Lima', 
                      'America/Los Angeles', 
                      'America/Maceio', 
                      'America/Managua', 
                      'America/Manaus', 
                      'America/Marigot', 
                      'America/Martinique', 
                      'America/Matamoros', 
                      'America/Mazatlan', 
                      'America/Menominee', 
                      'America/Merida', 
                      'America/Mexico City', 
                      'America/Miquelon', 
                      'America/Moncton', 
                      'America/Monterrey', 
                      'America/Montevideo', 
                      'America/Montreal', 
                      'America/Montserrat', 
                      'America/Nassau', 
                      'America/New York', 
                      'America/Nipigon', 
                      'America/Nome', 
                      'America/Noronha', 
                      'America/North Dakota/Center', 
                      'America/North Dakota/New Salem', 
                      'America/Ojinaga', 
                      'America/Panama', 
                      'America/Pangnirtung', 
                      'America/Paramaribo', 
                      'America/Phoenix', 
                      'America/Port of Spain', 
                      'America/Port-au-Prince', 
                      'America/Porto Velho', 
                      'America/Puerto Rico', 
                      'America/Rainy River', 
                      'America/Rankin Inlet', 
                      'America/Recife', 
                      'America/Regina', 
                      'America/Rio Branco', 
                      'America/Santa Isabel', 
                      'America/Santarem', 
                      'America/Santo Domingo', 
                      'America/Sao Paulo', 
                      'America/Scoresbysund', 
                      'America/Shiprock', 
                      'America/St Barthelemy', 
                      'America/St Johns', 
                      'America/St Kitts', 
                      'America/St Lucia', 
                      'America/St Thomas', 
                      'America/St Vincent', 
                      'America/Swift Current', 
                      'America/Tegucigalpa', 
                      'America/Thule', 
                      'America/Thunder Bay', 
                      'America/Tijuana', 
                      'America/Toronto', 
                      'America/Tortola', 
                      'America/Vancouver', 
                      'America/Whitehorse', 
                      'America/Winnipeg', 
                      'America/Yakutat', 
                      'America/Yellowknife', 
                      'Antarctica/Casey', 
                      'Antarctica/Davis', 
                      'Antarctica/DumontDUrville', 
                      'Antarctica/Macquarie', 
                      'Antarctica/Mawson', 
                      'Antarctica/McMurdo', 
                      'Antarctica/Rothera', 
                      'Antarctica/South Pole', 
                      'Antarctica/Syowa', 
                      'Antarctica/Vostok', 
                      'Arctic/Longyearbyen', 
                      'Asia/Aden', 
                      'Asia/Almaty', 
                      'Asia/Anadyr', 
                      'Asia/Aqtau', 
                      'Asia/Aqtobe', 
                      'Asia/Ashgabat', 
                      'Asia/Baghdad', 
                      'Asia/Bahrain', 
                      'Asia/Baku', 
                      'Asia/Bangkok', 
                      'Asia/Beirut', 
                      'Asia/Bishkek', 
                      'Asia/Brunei', 
                      'Asia/Choibalsan', 
                      'Asia/Chongqing', 
                      'Asia/Colombo', 
                      'Asia/Damascus', 
                      'Asia/Dhaka', 
                      'Asia/Dili', 
                      'Asia/Dubai', 
                      'Asia/Dushanbe', 
                      'Asia/Gaza', 
                      'Asia/Harbin', 
                      'Asia/Ho Chi Minh', 
                      'Asia/Hong Kong', 
                      'Asia/Hovd', 
                      'Asia/Irkutsk', 
                      'Asia/Jakarta', 
                      'Asia/Jayapura', 
                      'Asia/Kabul', 
                      'Asia/Kamchatka', 
                      'Asia/Karachi', 
                      'Asia/Kashgar', 
                      'Asia/Kathmandu', 
                      'Asia/Kolkata', 
                      'Asia/Krasnoyarsk', 
                      'Asia/Kuala Lumpur', 
                      'Asia/Kuching', 
                      'Asia/Kuwait', 
                      'Asia/Macau', 
                      'Asia/Magadan', 
                      'Asia/Makassar', 
                      'Asia/Manila', 
                      'Asia/Muscat', 
                      'Asia/Nicosia', 
                      'Asia/Novokuznetsk', 
                      'Asia/Novosibirsk', 
                      'Asia/Omsk', 
                      'Asia/Oral', 
                      'Asia/Phnom Penh', 
                      'Asia/Pontianak', 
                      'Asia/Pyongyang', 
                      'Asia/Qatar', 
                      'Asia/Qyzylorda', 
                      'Asia/Rangoon', 
                      'Asia/Riyadh', 
                      'Asia/Sakhalin', 
                      'Asia/Samarkand', 
                      'Asia/Seoul', 
                      'Asia/Shanghai', 
                      'Asia/Singapore', 
                      'Asia/Taipei', 
                      'Asia/Tashkent', 
                      'Asia/Tbilisi', 
                      'Asia/Tehran', 
                      'Asia/Thimphu', 
                      'Asia/Tokyo', 
                      'Asia/Ulaanbaatar', 
                      'Asia/Urumqi', 
                      'Asia/Vientiane', 
                      'Asia/Vladivostok', 
                      'Asia/Yakutsk', 
                      'Asia/Yekaterinburg', 
                      'Asia/Yerevan', 
                      'Atlantic/Azores', 
                      'Atlantic/Bermuda', 
                      'Atlantic/Canary', 
                      'Atlantic/Cape Verde', 
                      'Atlantic/Faroe', 
                      'Atlantic/Madeira', 
                      'Atlantic/Reykjavik', 
                      'Atlantic/South Georgia', 
                      'Atlantic/St Helena', 
                      'Atlantic/Stanley', 
                      'Australia/Adelaide', 
                      'Australia/Brisbane', 
                      'Australia/Broken Hill', 
                      'Australia/Currie', 
                      'Australia/Darwin', 
                      'Australia/Eucla', 
                      'Australia/Hobart', 
                      'Australia/Lindeman', 
                      'Australia/Lord Howe', 
                      'Australia/Melbourne', 
                      'Australia/Perth', 
                      'Australia/Sydney', 
                      'Europe/Amsterdam', 
                      'Europe/Andorra', 
                      'Europe/Athens', 
                      'Europe/Belgrade', 
                      'Europe/Berlin', 
                      'Europe/Bratislava', 
                      'Europe/Brussels', 
                      'Europe/Bucharest', 
                      'Europe/Budapest', 
                      'Europe/Chisinau', 
                      'Europe/Copenhagen', 
                      'Europe/Dublin', 
                      'Europe/Gibraltar', 
                      'Europe/Guernsey', 
                      'Europe/Helsinki', 
                      'Europe/Isle of Man', 
                      'Europe/Istanbul', 
                      'Europe/Jersey', 
                      'Europe/Kaliningrad', 
                      'Europe/Kiev', 
                      'Europe/Lisbon', 
                      'Europe/Ljubljana', 
                      'Europe/London', 
                      'Europe/Luxembourg', 
                      'Europe/Madrid', 
                      'Europe/Malta', 
                      'Europe/Mariehamn', 
                      'Europe/Minsk', 
                      'Europe/Monaco', 
                      'Europe/Moscow', 
                      'Europe/Oslo', 
                      'Europe/Paris', 
                      'Europe/Podgorica', 
                      'Europe/Prague', 
                      'Europe/Riga', 
                      'Europe/Rome', 
                      'Europe/Samara', 
                      'Europe/San Marino', 
                      'Europe/Sarajevo', 
                      'Europe/Simferopol', 
                      'Europe/Skopje', 
                      'Europe/Sofia', 
                      'Europe/Stockholm', 
                      'Europe/Tallinn', 
                      'Europe/Tirane', 
                      'Europe/Uzhgorod', 
                      'Europe/Vaduz', 
                      'Europe/Vatican', 
                      'Europe/Vienna', 
                      'Europe/Vilnius', 
                      'Europe/Volgograd', 
                      'Europe/Warsaw', 
                      'Europe/Zagreb', 
                      'Europe/Zaporozhye', 
                      'Europe/Zurich', 
                      'Indian/Antananarivo', 
                      'Indian/Chagos', 
                      'Indian/Christmas', 
                      'Indian/Cocos', 
                      'Indian/Comoro', 
                      'Indian/Kerguelen', 
                      'Indian/Mahe', 
                      'Indian/Maldives', 
                      'Indian/Mauritius', 
                      'Indian/Mayotte', 
                      'Indian/Reunion', 
                      'Pacific/Apia', 
                      'Pacific/Auckland', 
                      'Pacific/Chatham', 
                      'Pacific/Efate', 
                      'Pacific/Enderbury', 
                      'Pacific/Fakaofo', 
                      'Pacific/Fiji', 
                      'Pacific/Funafuti', 
                      'Pacific/Galapagos', 
                      'Pacific/Gambier', 
                      'Pacific/Guadalcanal', 
                      'Pacific/Guam', 
                      'Pacific/Honolulu', 
                      'Pacific/Johnston', 
                      'Pacific/Kiritimati', 
                      'Pacific/Kosrae', 
                      'Pacific/Kwajalein', 
                      'Pacific/Majuro', 
                      'Pacific/Marquesas', 
                      'Pacific/Midway', 
                      'Pacific/Nauru', 
                      'Pacific/Niue', 
                      'Pacific/Norfolk', 
                      'Pacific/Noumea', 
                      'Pacific/Pago Pago', 
                      'Pacific/Palau', 
                      'Pacific/Pitcairn', 
                      'Pacific/Ponape', 
                      'Pacific/Port Moresby', 
                      'Pacific/Rarotonga', 
                      'Pacific/Saipan', 
                      'Pacific/Tahiti', 
                      'Pacific/Tarawa', 
                      'Pacific/Tongatapu', 
                      'Pacific/Truk', 
                      'Pacific/Wake', 
                      'Pacific/Wallis'
                  ], 
                  'propertyOrder': 1, 
                  'type': 'string'
              }, 
                'ula_prefix': {
                  'description': 'IPv6 Unique Local Address prefix', 
                  'propertyOrder': 2, 
                  'title': 'ULA prefix', 
                  'type': 'string'
              }
            }, 
            'propertyOrder': 1, 
            'title': 'General', 
            'type': 'object'
        }, 
        'interfaces': {
            'additionalItems': true, 
            'items': {
                'oneOf': [
                  {
                      '$ref': '#/definitions/network_interface'
                  }, 
                  {
                      '$ref': '#/definitions/wireless_interface'
                  }, 
                  {
                      '$ref': '#/definitions/bridge_interface'
                  }
              ], 
                'title': 'Interface'
            }, 
            'propertyOrder': 2, 
            'title': 'Interfaces', 
            'type': 'array', 
            'uniqueItems': true
        }, 
        'ip_rules': {
            'additionalItems': true, 
            'items': {
                'additionalProperties': true, 
                'properties': {
                  'action': {
                      'enum': [
                          'prohibit', 
                          'unreachable', 
                          'blackhole', 
                          'throw'
                      ], 
                      'propertyOrder': 8, 
                      'type': 'string'
                  }, 
                  'dest': {
                      'description': '(CIDR notation)', 
                      'propertyOrder': 4, 
                      'title': 'destination subnet', 
                      'type': 'string'
                  }, 
                  'goto': {
                      'propertyOrder': 9, 
                      'type': 'integer'
                  }, 
                  'in': {
                      'propertyOrder': 1, 
                      'title': 'incoming interface', 
                      'type': 'string'
                  }, 
                  'invert': {
                      'default': false, 
                      'format': 'checkbox', 
                      'propertyOrder': 10, 
                      'type': 'boolean'
                  }, 
                  'lookup': {
                      'description': 'routing table ID or symbolic link alias', 
                      'propertyOrder': 7, 
                      'type': 'string'
                  }, 
                  'mark': {
                      'description': 'TOS value to match in IP headers', 
                      'propertyOrder': 6, 
                      'type': 'string'
                  }, 
                  'out': {
                      'propertyOrder': 2, 
                      'title': 'outgoing interface', 
                      'type': 'string'
                  }, 
                  'src': {
                      'description': '(CIDR notation)', 
                      'propertyOrder': 3, 
                      'title': 'source subnet', 
                      'type': 'string'
                  }, 
                  'tos': {
                      'description': 'TOS value to match in IP headers', 
                      'propertyOrder': 5, 
                      'title': 'TOS', 
                      'type': 'integer'
                  }
              }, 
                'title': 'IP rule', 
                'type': 'object'
            }, 
            'propertyOrder': 7, 
            'title': 'Policy routing', 
            'type': 'array', 
            'uniqueItems': true
        }, 
        'led': {
            'additionalItems': true, 
            'items': {
                'additionalProperties': true, 
                'properties': {
                  'default': {
                      'format': 'checkbox', 
                      'propertyOrder': 2, 
                      'type': 'boolean'
                  }, 
                  'delayoff': {
                      'propertyOrder': 6, 
                      'type': 'integer'
                  }, 
                  'delayon': {
                      'propertyOrder': 7, 
                      'type': 'integer'
                  }, 
                  'dev': {
                      'propertyOrder': 3, 
                      'type': 'string'
                  }, 
                  'interval': {
                      'propertyOrder': 8, 
                      'type': 'integer'
                  }, 
                  'message': {
                      'propertyOrder': 9, 
                      'type': 'string'
                  }, 
                  'mode': {
                      'propertyOrder': 10, 
                      'type': 'string'
                  }, 
                  'name': {
                      'propertyOrder': 1, 
                      'type': 'string'
                  }, 
                  'sysfs': {
                      'propertyOrder': 4, 
                      'type': 'string'
                  }, 
                  'trigger': {
                      'propertyOrder': 5, 
                      'type': 'string'
                  }
              }, 
                'required': [
                  'name', 
                  'sysfs', 
                  'trigger'
              ], 
                'title': 'LED', 
                'type': 'object'
            }, 
            'propertyOrder': 10, 
            'title': 'LEDs', 
            'type': 'array', 
            'uniqueItems': true
        }, 
        'ntp': {
            'additionalProperties': true, 
            'properties': {
                'enable_server': {
                  'default': false, 
                  'format': 'checkbox', 
                  'propertyOrder': 2, 
                  'title': 'enable NTP server', 
                  'type': 'boolean'
              }, 
                'enabled': {
                  'default': true, 
                  'format': 'checkbox', 
                  'propertyOrder': 1, 
                  'title': 'enable NTP client', 
                  'type': 'boolean'
              }, 
                'server': {
                  'additionalItems': true, 
                  'default': [
                      '0.openwrt.pool.ntp.org', 
                      '1.openwrt.pool.ntp.org', 
                      '2.openwrt.pool.ntp.org', 
                      '3.openwrt.pool.ntp.org'
                  ], 
                  'description': 'NTP server candidates', 
                  'items': {
                      'format': 'hostname', 
                      'title': 'NTP server', 
                      'type': 'string'
                  }, 
                  'propertyOrder': 3, 
                  'title': 'NTP Servers', 
                  'type': 'array', 
                  'uniqueItems': true
              }
            }, 
            'propertyOrder': 8, 
            'title': 'NTP Settings', 
            'type': 'object'
        }, 
        'openvpn': {
            'additionalItems': true, 
            'items': {
                'additionalProperties': true, 
                'oneOf': [
                  {
                      '$ref': '#/definitions/client'
                  }, 
                  {
                      '$ref': '#/definitions/server_manual'
                  }, 
                  {
                      '$ref': '#/definitions/server_bridged'
                  }, 
                  {
                      '$ref': '#/definitions/server_routed'
                  }
              ], 
                'title': 'VPN', 
                'type': 'object'
            }, 
            'propertyOrder': 11, 
            'title': 'OpenVPN', 
            'type': 'array', 
            'uniqueItems': true
        }, 
        'radios': {
            'additionalItems': true, 
            'items': {
                'oneOf': [
                  {
                      '$ref': '#/definitions/radio_80211gn_settings'
                  }, 
                  {
                      '$ref': '#/definitions/radio_80211an_settings'
                  }, 
                  {
                      '$ref': '#/definitions/radio_80211ac_2ghz_settings'
                  }, 
                  {
                      '$ref': '#/definitions/radio_80211ac_5ghz_settings'
                  }, 
                  {
                      '$ref': '#/definitions/radio_80211bg_settings'
                  }, 
                  {
                      '$ref': '#/definitions/radio_80211a_settings'
                  }
              ], 
                'title': 'Radio'
            }, 
            'propertyOrder': 3, 
            'title': 'Radios', 
            'type': 'array', 
            'uniqueItems': true
        }, 
        'routes': {
            'additionalItems': true, 
            'items': {
                'additionalProperties': true, 
                'properties': {
                  'cost': {
                      'default': 0, 
                      'propertyOrder': 4, 
                      'type': 'integer'
                  }, 
                  'destination': {
                      'propertyOrder': 2, 
                      'type': 'string'
                  }, 
                  'device': {
                      'description': 'interface name of the to which the static route should apply', 
                      'propertyOrder': 1, 
                      'type': 'string'
                  }, 
                  'mtu': {
                      'pattern': '^[0-9]*$', 
                      'propertyOrder': 6, 
                      'title': 'MTU', 
                      'type': 'string'
                  }, 
                  'next': {
                      'propertyOrder': 2, 
                      'title': 'next hop', 
                      'type': 'string'
                  }, 
                  'onlink': {
                      'default': false, 
                      'format': 'checkbox', 
                      'propertyOrder': 8, 
                      'type': 'boolean'
                  }, 
                  'source': {
                      'description': 'the preferred source address when sending to destinations covered by the target (optional)', 
                      'propertyOrder': 5, 
                      'type': 'string'
                  }, 
                  'table': {
                      'pattern': '^[0-9]*$', 
                      'propertyOrder': 7, 
                      'type': 'string'
                  }, 
                  'type': {
                      'default': 'unicast', 
                      'enum': [
                          'unicast', 
                          'local', 
                          'broadcast', 
                          'multicast', 
                          'unreachable', 
                          'prohibit', 
                          'blackhole', 
                          'anycast'
                      ], 
                      'propertyOrder': 0, 
                      'type': 'string'
                  }
              }, 
                'required': [
                  'device', 
                  'destination', 
                  'next', 
                  'cost'
              ], 
                'title': 'Route', 
                'type': 'object'
            }, 
            'propertyOrder': 6, 
            'title': 'Static routes', 
            'type': 'array', 
            'uniqueItems': true
        }, 
        'switch': {
            'additionalItems': true, 
            'items': {
                'additionalProperties': true, 
                'properties': {
                  'enable_vlan': {
                      'default': true, 
                      'format': 'checkbox', 
                      'propertyOrder': 3, 
                      'title': 'enable vlan', 
                      'type': 'boolean'
                  }, 
                  'name': {
                      'propertyOrder': 1, 
                      'type': 'string'
                  }, 
                  'reset': {
                      'default': true, 
                      'format': 'checkbox', 
                      'propertyOrder': 2, 
                      'type': 'boolean'
                  }, 
                  'vlan': {
                      'additionalItems': true, 
                      'items': {
                          'additionalProperties': true, 
                          'properties': {
                              'device': {
                                  'propertyOrder': 1, 
                                  'type': 'string'
                              }, 
                              'ports': {
                                  'propertyOrder': 3, 
                                  'type': 'string'
                              }, 
                              'vlan': {
                                  'propertyOrder': 2, 
                                  'type': 'integer'
                              }
                          }, 
                          'required': [
                              'device', 
                              'vlan', 
                              'ports'
                          ], 
                          'title': 'VLAN', 
                          'type': 'object'
                      }, 
                      'propertyOrder': 4, 
                      'title': 'VLANs', 
                      'type': 'array', 
                      'uniqueItems': true
                  }
              }, 
                'required': [
                  'name', 
                  'reset', 
                  'enable_vlan', 
                  'vlan'
              ], 
                'title': 'Switch', 
                'type': 'object'
            }, 
            'propertyOrder': 9, 
            'title': 'Programmable Switch', 
            'type': 'array', 
            'uniqueItems': true
        }
    }, 
    'type': 'object'
}

const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer)

const showResults = values => {
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
}

const dest = document.getElementById('form-holder')

ReactDOM.render(
    <Provider store={store}>
        <div style={{
            width: '500px',
            margin: '0 auto',
        }}>
        <Liform schema={schema} onSubmit={showResults} />
    </div>
    </Provider>,
    dest
)
