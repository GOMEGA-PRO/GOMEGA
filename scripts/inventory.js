define(function () {
    const data = [
        {
            name: 'WALNUT /AKHROT WHOLE (700/kg)',
            q1: '35',
            q2: '70',
            q3: '175',
            q4: '350',
            q5: '700',
            id: '1',
            type: 'dryfruit'
        },
        {
            name: 'FIG /ANJEER (1140/kg)',
            q1: '57',
            q2: '114',
            q3: '285',
            q4: '570',
            q5: '1140',
            id: '2',
            type: 'dryfruit'
        },
        {
            name: 'APRICOT (600/kg)',
            q1: '30',
            q2: '60',
            q3: '150',
            q4: '300',
            q5: '600',
            id: '3',
            type: 'dryfruit'
        },
        {
            name: 'BADAM_PREMIUM (780/kg)',
            q1: '39',
            q2: '78',
            q3: '195',
            q4: '390',
            q5: '780',
            id: '4',
            type: 'dryfruit'
        },
        {
            name: 'BADAM_REGULAR (620/kg)',
            q1: '31',
            q2: '62',
            q3: '155',
            q4: '310',
            q5: '620',
            id: '5',
            type: 'dryfruit'
        },
        {
            name: 'CHIASEEDS (400/kg)',
            q1: '20',
            q2: '40',
            q3: '100',
            q4: '200',
            q5: '400',
            id: '6',
            type: 'dryfruit'
        },
        {
            name: 'CHILGOZA MAKAZ (6800/kg)',
            q1: '340',
            q2: '680',
            q3: '1700',
            q4: '3400',
            q5: '6800',
            id: '7',
            type: 'dryfruit'
        },
        {
            name: 'CHIRONJI (1600/kg)',
            q1: '80',
            q2: '160',
            q3: '400',
            q4: '800',
            q5: '1600',
            id: '8',
            type: 'dryfruit'
        },
        {
            name: 'DATES SEEDLESS (160/kg)',
            q1: '8',
            q2: '16',
            q3: '40',
            q4: '80',
            q5: '160',
            id: '9',
            type: 'dryfruit'
        },
        {
            name: 'DRY_DATES (360/kg)',
            q1: '18',
            q2: '36',
            q3: '90',
            q4: '180',
            q5: '360',
            id: '10',
            type: 'dryfruit'
        },
        {
            name: 'KAJU 2PCS (780/kg)',
            q1: '39',
            q2: '78',
            q3: '195',
            q4: '390',
            q5: '780',
            id: '11',
            type: 'dryfruit'
        },
        {
            name: 'KAJU 4PCS (620/kg)',
            q1: '31',
            q2: '62',
            q3: '155',
            q4: '310',
            q5: '620',
            id: '12',
            type: 'dryfruit'
        },
        {
            name: 'KAJU_PREMIUM (940/kg)',
            q1: '47',
            q2: '94',
            q3: '235',
            q4: '470',
            q5: '940',
            id: '13',
            type: 'dryfruit'
        },
        {
            name: 'KAJU_REGULAR (820/kg)',
            q1: '41',
            q2: '82',
            q3: '205',
            q4: '410',
            q5: '820',
            id: '14',
            type: 'dryfruit'
        },
        {
            name: 'KHARBOOJSEEDS (500/kg)',
            q1: '25',
            q2: '50',
            q3: '125',
            q4: '250',
            q5: '500',
            id: '15',
            type: 'dryfruit'
        },
        {
            name: 'KISHMISH_BLACK (540/kg)',
            q1: '27',
            q2: '54',
            q3: '135',
            q4: '270',
            q5: '540',
            id: '16',
            type: 'dryfruit'
        },
        {
            name: 'KISHMISH_GREEN (320/kg)',
            q1: '16',
            q2: '32',
            q3: '80',
            q4: '160',
            q5: '320',
            id: '17',
            type: 'dryfruit'
        },
        {
            name: 'KISHMISH_PREMIUM (520/kg)',
            q1: '26',
            q2: '52',
            q3: '130',
            q4: '260',
            q5: '520',
            id: '18',
            type: 'dryfruit'
        },
        {
            name: 'MAKHANA (940/kg)',
            q1: '47',
            q2: '94',
            q3: '235',
            q4: '470',
            q5: '940',
            id: '19',
            type: 'dryfruit'
        },
        {
            name: 'MAMRA_BADAM(EXCLU) (3000/kg)',
            q1: '150',
            q2: '300',
            q3: '750',
            q4: '1500',
            q5: '3000',
            id: '20',
            type: 'dryfruit'
        },
        {
            name: 'MANUKA (640/kg)',
            q1: '32',
            q2: '64',
            q3: '160',
            q4: '320',
            q5: '640',
            id: '21',
            type: 'dryfruit'
        },
        {
            name: 'PLAIN_PISTA (1300/kg)',
            q1: '65',
            q2: '130',
            q3: '325',
            q4: '650',
            q5: '1300',
            id: '22',
            type: 'dryfruit'
        },
        {
            name: 'POOJA BADAM (280/kg)',
            q1: '14',
            q2: '28',
            q3: '70',
            q4: '140',
            q5: '280',
            id: '23',
            type: 'dryfruit'
        },
        {
            name: 'PUMPKIN SEEDS (600/kg)',
            q1: '30',
            q2: '60',
            q3: '150',
            q4: '300',
            q5: '600',
            id: '24',
            type: 'dryfruit'
        },
        {
            name: 'QUINOA (200/kg)',
            q1: '10',
            q2: '20',
            q3: '50',
            q4: '100',
            q5: '200',
            id: '25',
            type: 'dryfruit'
        },
        {
            name: 'SALTED_PISTA (960/kg)',
            q1: '48',
            q2: '96',
            q3: '240',
            q4: '480',
            q5: '960',
            id: '26',
            type: 'dryfruit'
        },
        {
            name: 'SUNFLOWERSEEDS (400/kg)',
            q1: '20',
            q2: '40',
            q3: '100',
            q4: '200',
            q5: '400',
            id: '27',
            type: 'dryfruit'
        },
        {
            name: 'WALNUT_KERNELS (1200/kg)',
            q1: '60',
            q2: '120',
            q3: '300',
            q4: '600',
            q5: '1200',
            id: '28',
            type: 'dryfruit'
        },
        {
            name: 'ALSI (99/kg)',
            q1: '4.95',
            q2: '9.9',
            q3: '24.75',
            q4: '49.5',
            q5: '99',
            id: '30',
            type: 'grocery'
        },
        {
            name: 'ALUBUKHARA (300/kg)',
            q1: '15',
            q2: '30',
            q3: '75',
            q4: '150',
            q5: '300',
            id: '31',
            type: 'grocery'
        },
        {
            name: 'BAJRA (47/kg)',
            q1: '2.35',
            q2: '4.7',
            q3: '11.75',
            q4: '23.5',
            q5: '47',
            id: '32',
            type: 'grocery'
        },
        {
            name: 'BAJRI ATTA (60/kg)',
            q1: '3',
            q2: '6',
            q3: '15',
            q4: '30',
            q5: '60',
            id: '33',
            type: 'grocery'
        },
        {
            name: 'BASMATI RICE IndiaGate CLASSIC (170/kg)',
            q1: '8.5',
            q2: '17',
            q3: '42.5',
            q4: '85',
            q5: '170',
            id: '34',
            type: 'grocery'
        },
        {
            name: 'BESAN (85/kg)',
            q1: '4.2',
            q2: '8.4',
            q3: '21',
            q4: '42',
            q5: '84',
            id: '35',
            type: 'grocery'
        },
        {
            name: 'BHAGAR (120/kg)',
            q1: '6',
            q2: '12',
            q3: '30',
            q4: '60',
            q5: '120',
            id: '36',
            type: 'grocery'
        },
        {
            name: 'BLACK SALT POWDER (80/kg)',
            q1: '4',
            q2: '8',
            q3: '20',
            q4: '40',
            q5: '80',
            id: '37',
            type: 'grocery'
        },
        {
            name: 'CHANA DAL (88/kg)',
            q1: '4.40',
            q2: '8.80',
            q3: '22',
            q4: '44',
            q5: '88',
            id: '38',
            type: 'grocery'
        },
        {
            name: 'CHERRY (200/kg)',
            q1: '10',
            q2: '20',
            q3: '50',
            q4: '100',
            q5: '200',
            id: '39',
            type: 'grocery'
        },
        {
            name: 'CITRIC ACID (200/kg)',
            q1: '10',
            q2: '20',
            q3: '50',
            q4: '100',
            q5: '200',
            id: '40',
            type: 'grocery'
        },
        {
            name: 'CORN FLOUR (60/kg)',
            q1: '3',
            q2: '6',
            q3: '15',
            q4: '30',
            q5: '60',
            id: '41',
            type: 'grocery'
        },
        {
            name: 'DALI GONDH (320/kg)',
            q1: '16',
            q2: '32',
            q3: '80',
            q4: '160',
            q5: '320',
            id: '42',
            type: 'grocery'
        },
        {
            name: 'DIAMOND MISRI (80/kg)',
            q1: '4',
            q2: '8',
            q3: '20',
            q4: '40',
            q5: '80',
            id: '43',
            type: 'grocery'
        },
        {
            name: 'DRY CHILLI (200/kg)',
            q1: '10',
            q2: '20',
            q3: '50',
            q4: '100',
            q5: '200',
            id: '44',
            type: 'grocery'
        },
        {
            name: 'EATING SODA (100/kg)',
            q1: '5',
            q2: '10',
            q3: '25',
            q4: '50',
            q5: '100',
            id: '45',
            type: 'grocery'
        },
        {
            name: 'FINE POHA (64/kg)',
            q1: '3.2',
            q2: '6.4',
            q3: '16',
            q4: '32',
            q5: '64',
            id: '46',
            type: 'grocery'
        },
        {
            name: 'FRYMES (90/kg)',
            q1: '4.5',
            q2: '9',
            q3: '22.5',
            q4: '45',
            q5: '90',
            id: '47',
            type: 'grocery'
        },
        {
            name: 'GOLD FINGER (60/kg)',
            q1: '3',
            q2: '6',
            q3: '15',
            q4: '30',
            q5: '60',
            id: '48',
            type: 'grocery'
        },
        {
            name: 'GOTA KHOPRA (200/kg)',
            q1: '10',
            q2: '20',
            q3: '50',
            q4: '100',
            q5: '200',
            id: '49',
            type: 'grocery'
        },
        {
            name: 'GREEN PEAS (200/kg)',
            q1: '10',
            q2: '20',
            q3: '50',
            q4: '100',
            q5: '200',
            id: '50',
            type: 'grocery'
        },
        {
            name: 'IDLY RAVA (38/kg)',
            q1: '1.90',
            q2: '3.80',
            q3: '9.5',
            q4: '19',
            q5: '38',
            id: '51',
            type: 'grocery'
        },
        {
            name: 'JAGGERY KOLHAPURI (65/kg)',
            q1: '3.25',
            q2: '6.5',
            q3: '16.25',
            q4: '32.5',
            q5: '65',
            id: '52',
            type: 'grocery'
        },
        {
            name: 'JAGGERY POWDER NATURAL (110/kg)',
            q1: '5.5',
            q2: '11',
            q3: '27.5',
            q4: '55',
            q5: '110',
            id: '53',
            type: 'grocery'
        },
        {
            name: 'JAWARI (75/kg)',
            q1: '3.75',
            q2: '7.5',
            q3: '18.75',
            q4: '37.5',
            q5: '75',
            id: '54',
            type: 'grocery'
        },
        {
            name: 'JAWARI ATTA (62/kg)',
            q1: '3.1',
            q2: '6.2',
            q3: '15.5',
            q4: '31',
            q5: '62',
            id: '55',
            type: 'grocery'
        },
        {
            name: 'KABULI CHANA (110/kg)',
            q1: '5.5',
            q2: '11',
            q3: '27.5',
            q4: '55',
            q5: '110',
            id: '56',
            type: 'grocery'
        },
        {
            name: 'KESARI RAWA (52/kg)',
            q1: '2.6',
            q2: '5.2',
            q3: '13',
            q4: '26',
            q5: '52',
            id: '57',
            type: 'grocery'
        },
        {
            name: 'KHOPRA POWDER1 (240/kg)',
            q1: '12',
            q2: '24',
            q3: '60',
            q4: '120',
            q5: '240',
            id: '58',
            type: 'grocery'
        },
        {
            name: 'KULTI BLACK (80/kg)',
            q1: '4',
            q2: '8',
            q3: '20',
            q4: '40',
            q5: '80',
            id: '59',
            type: 'grocery'
        },
        {
            name: 'KULTI WHITE (80/kg)',
            q1: '4',
            q2: '8',
            q3: '20',
            q4: '40',
            q5: '80',
            id: '60',
            type: 'grocery'
        },
        {
            name: 'MAIDA (44/kg)',
            q1: '2.20',
            q2: '4.40',
            q3: '11',
            q4: '22',
            q5: '44',
            id: '61',
            type: 'grocery'
        },
        {
            name: 'MAKKAI ATTA (65/kg)',
            q1: '3.25',
            q2: '6.5',
            q3: '16.25',
            q4: '32.5',
            q5: '65',
            id: '62',
            type: 'grocery'
        },
        {
            name: 'MAKKAI POHA (80/kg)',
            q1: '4',
            q2: '8',
            q3: '20',
            q4: '40',
            q5: '80',
            id: '63',
            type: 'grocery'
        },
        {
            name: 'MASOOR DAL (RED) (105/kg)',
            q1: '5.25',
            q2: '10.5',
            q3: '26.25',
            q4: '52.5',
            q5: '105',
            id: '64',
            type: 'grocery'
        },
        {
            name: 'MASOOR WHOLE(BLACK) (105/kg)',
            q1: '5.25',
            q2: '10.5',
            q3: '26.25',
            q4: '52.5',
            q5: '105',
            id: '65',
            type: 'grocery'
        },
        {
            name: 'MEAL MAKER (SOYA CHUNKS) (100/kg)',
            q1: '5',
            q2: '10',
            q3: '25',
            q4: '50',
            q5: '100',
            id: '66',
            type: 'grocery'
        },
        {
            name: 'MEDIUM WHEAT RAWA (52/kg)',
            q1: '2.6',
            q2: '5.2',
            q3: '13',
            q4: '26',
            q5: '52',
            id: '67',
            type: 'grocery'
        },
        {
            name: 'MOONG CHILKA (120/kg)',
            q1: '6',
            q2: '12',
            q3: '30',
            q4: '60',
            q5: '120',
            id: '68',
            type: 'grocery'
        },
        {
            name: 'MOONGDAL (118/kg)',
            q1: '5.9',
            q2: '11.8',
            q3: '29.5',
            q4: '59',
            q5: '118',
            id: '69',
            type: 'grocery'
        },
        {
            name: 'MOOTH (100/kg)',
            q1: '5',
            q2: '10',
            q3: '25',
            q4: '50',
            q5: '100',
            id: '70',
            type: 'grocery'
        },
        {
            name: 'MOTA MISRI (80/kg)',
            q1: '4',
            q2: '8',
            q3: '20',
            q4: '40',
            q5: '80',
            id: '71',
            type: 'grocery'
        },
        {
            name: 'MOTA POHA (55/kg)',
            q1: '2.75',
            q2: '5.5',
            q3: '13.75',
            q4: '27.5',
            q5: '55',
            id: '72',
            type: 'grocery'
        },
        {
            name: 'MOTA SOUNF (250/kg)',
            q1: '12.5',
            q2: '25',
            q3: '62.5',
            q4: '125',
            q5: '250',
            id: '73',
            type: 'grocery'
        },
        {
            name: 'MURMURA (45/kg)',
            q1: '2.25',
            q2: '4.5',
            q3: '11.25',
            q4: '22.5',
            q5: '45',
            id: '74',
            type: 'grocery'
        },
        {
            name: 'PALLI (120/kg)',
            q1: '6',
            q2: '12',
            q3: '30',
            q4: '60',
            q5: '120',
            id: '75',
            type: 'grocery'
        },
        {
            name: 'PAPAD (APPALAM) (250/kg)',
            q1: '12.5',
            q2: '25',
            q3: '62.5',
            q4: '125',
            q5: '250',
            id: '76',
            type: 'grocery'
        },
        {
            name: 'PAPAD (MARWADI) (240/kg)',
            q1: '12',
            q2: '24',
            q3: '60',
            q4: '120',
            q5: '240',
            id: '77',
            type: 'grocery'
        },
        {
            name: 'PHUTANA (95/kg)',
            q1: '4.75',
            q2: '9.5',
            q3: '23.75',
            q4: '47.5',
            q5: '95',
            id: '78',
            type: 'grocery'
        },
        {
            name: 'POOJA SUPARI (440/kg)',
            q1: '22',
            q2: '44',
            q3: '110',
            q4: '220',
            q5: '440',
            id: '79',
            type: 'grocery'
        },
        {
            name: 'POPCORN SEEDS (120/kg)',
            q1: '6',
            q2: '12',
            q3: '30',
            q4: '60',
            q5: '120',
            id: '80',
            type: 'grocery'
        },
        {
            name: 'RAAGI ATTA (52/kg)',
            q1: '2.6',
            q2: '5.2',
            q3: '13',
            q4: '26',
            q5: '52',
            id: '81',
            type: 'grocery'
        },
        {
            name: 'RAGI (50/kg)',
            q1: '2.5',
            q2: '5',
            q3: '12.5',
            q4: '25',
            q5: '50',
            id: '82',
            type: 'grocery'
        },
        {
            name: 'RAWA SUPARI (550/kg)',
            q1: '27.5',
            q2: '55',
            q3: '137.5',
            q4: '275',
            q5: '550',
            id: '83',
            type: 'grocery'
        },
        {
            name: 'RED CHANA (78/kg)',
            q1: '3.90',
            q2: '7.80',
            q3: '19.5',
            q4: '39',
            q5: '78',
            id: '84',
            type: 'grocery'
        },
        {
            name: 'RED LOBIYA (105/kg)',
            q1: '5.25',
            q2: '10.5',
            q3: '26.25',
            q4: '52.5',
            q5: '105',
            id: '85',
            type: 'grocery'
        },
        {
            name: 'RED RAJMA (120/kg)',
            q1: '6',
            q2: '12',
            q3: '30',
            q4: '60',
            q5: '120',
            id: '86',
            type: 'grocery'
        },
        {
            name: 'RETHA (SOAP NUT) (140/kg)',
            q1: '7',
            q2: '14',
            q3: '35',
            q4: '70',
            q5: '140',
            id: '87',
            type: 'grocery'
        },
        {
            name: 'RICE AMBAMORE (96/kg)',
            q1: '4.80',
            q2: '9.60',
            q3: '24',
            q4: '48',
            q5: '96',
            id: '88',
            type: 'grocery'
        },
        {
            name: 'RICE ATTA (40/kg)',
            q1: '2',
            q2: '4',
            q3: '10',
            q4: '20',
            q5: '40',
            id: '89',
            type: 'grocery'
        },
        {
            name: 'RICE HMT (90/kg)',
            q1: '3.2',
            q2: '6.4',
            q3: '16',
            q4: '32',
            q5: '64',
            id: '90',
            type: 'grocery'
        },
        {
            name: 'SABJA (300/kg)',
            q1: '15',
            q2: '30',
            q3: '75',
            q4: '150',
            q5: '300',
            id: '91',
            type: 'grocery'
        },
        {
            name: 'SABUDANA (80/kg)',
            q1: '4',
            q2: '8',
            q3: '20',
            q4: '40',
            q5: '80',
            id: '92',
            type: 'grocery'
        },
        {
            name: 'SAGO MOTI (75/kg)',
            q1: '3.75',
            q2: '7.5',
            q3: '18.75',
            q4: '37.5',
            q5: '75',
            id: '93',
            type: 'grocery'
        },
        {
            name: 'SENDHA SALT POWDER (60/kg)',
            q1: '3',
            q2: '6',
            q3: '15',
            q4: '30',
            q5: '60',
            id: '94',
            type: 'grocery'
        },
        {
            name: 'SHARMILI RAJMA (RED) (120/kg)',
            q1: '6',
            q2: '12',
            q3: '30',
            q4: '60',
            q5: '120',
            id: '95',
            type: 'grocery'
        },
        {
            name: 'SHIKAKAI (250/kg)',
            q1: '12.5',
            q2: '25',
            q3: '62.5',
            q4: '125',
            q5: '250',
            id: '96',
            type: 'grocery'
        },
        {
            name: 'SMALL SAUNF (240/kg)',
            q1: '12',
            q2: '24',
            q3: '60',
            q4: '120',
            q5: '240',
            id: '97',
            type: 'grocery'
        },
        {
            name: 'SUGAR (39/kg)',
            q1: '1.95',
            q2: '3.90',
            q3: '9.75',
            q4: '19.5',
            q5: '39',
            id: '98',
            type: 'grocery'
        },
        {
            name: 'SUKHMUKH (DHANA DAL) (240/kg)',
            q1: '12',
            q2: '24',
            q3: '60',
            q4: '120',
            q5: '240',
            id: '99',
            type: 'grocery'
        },
        {
            name: 'SWEET SAUNF (100/kg)',
            q1: '5',
            q2: '10',
            q3: '25',
            q4: '50',
            q5: '100',
            id: '100',
            type: 'grocery'
        },
        {
            name: 'TAMARIND (EMILI) (280/kg)',
            q1: '14',
            q2: '28',
            q3: '70',
            q4: '140',
            q5: '280',
            id: '101',
            type: 'grocery'
        },
        {
            name: 'TARBOOJ SEEDS (240/kg)',
            q1: '12',
            q2: '24',
            q3: '60',
            q4: '120',
            q5: '240',
            id: '102',
            type: 'grocery'
        },
        {
            name: 'TOOR DAL (98/kg)',
            q1: '4.90',
            q2: '9.80',
            q3: '24.5',
            q4: '49',
            q5: '98',
            id: '103',
            type: 'grocery'
        },
        {
            name: 'TRUTI FRUTI (120/kg)',
            q1: '6',
            q2: '12',
            q3: '30',
            q4: '60',
            q5: '120',
            id: '104',
            type: 'grocery'
        },
        {
            name: 'UPMA RAVA(BOMBAY RAVA) (44/kg)',
            q1: '2.20',
            q2: '4.40',
            q3: '11',
            q4: '22',
            q5: '44',
            id: '105',
            type: 'grocery'
        },
        {
            name: 'URAD CHILKA (120/kg)',
            q1: '6',
            q2: '12',
            q3: '30',
            q4: '60',
            q5: '120',
            id: '106',
            type: 'grocery'
        },
        {
            name: 'URAD DAL (125/kg)',
            q1: '6.25',
            q2: '12.5',
            q3: '31.25',
            q4: '62.5',
            q5: '125',
            id: '107',
            type: 'grocery'
        },
        {
            name: 'URAD DAL (BLACK) (120/kg)',
            q1: '6',
            q2: '12',
            q3: '30',
            q4: '60',
            q5: '120',
            id: '108',
            type: 'grocery'
        },
        {
            name: 'VAKKAL (900/kg)',
            q1: '45',
            q2: '90',
            q3: '225',
            q4: '450',
            q5: '900',
            id: '109',
            type: 'grocery'
        },
        {
            name: 'WHITE LOBIYA (100/kg)',
            q1: '5',
            q2: '10',
            q3: '25',
            q4: '50',
            q5: '100',
            id: '110',
            type: 'grocery'
        },
        {
            name: 'WHITE PEAS (100/kg)',
            q1: '5',
            q2: '10',
            q3: '25',
            q4: '50',
            q5: '100',
            id: '111',
            type: 'grocery'
        },
        {
            name: 'WHITE RAJMA (130/kg)',
            q1: '6.5',
            q2: '13',
            q3: '32.5',
            q4: '65',
            q5: '130',
            id: '112',
            type: 'grocery'
        },
        {
            name: 'AJINOMOTO (180/kg)',
            q1: '9',
            q2: '18',
            q3: '45',
            q4: '90',
            q5: '180',
            id: '114',
            type: 'spices'
        },
        {
            name: 'AJWAIN (300/kg)',
            q1: '15',
            q2: '30',
            q3: '75',
            q4: '150',
            q5: '300',
            id: '115',
            type: 'spices'
        },
        {
            name: 'BARLEY (70/kg)',
            q1: '3.5',
            q2: '7',
            q3: '17.5',
            q4: '35',
            q5: '70',
            id: '116',
            type: 'spices'
        },
        {
            name: 'BIRYANI PHOOL (1200/kg)',
            q1: '60',
            q2: '120',
            q3: '300',
            q4: '600',
            q5: '1200',
            id: '117',
            type: 'spices'
        },
        {
            name: 'CURD CHILLY (300/kg )',
            q1: '15',
            q2: '30',
            q3: '75',
            q4: '150',
            q5: '300',
            id: '118',
            type: 'spices'
        },
        {
            name: 'DAL CHINI (380/kg)',
            q1: '19',
            q2: '38',
            q3: '95',
            q4: '190',
            q5: '380',
            id: '119',
            type: 'spices'
        },
        {
            name: 'DHANIYA (180/kg)',
            q1: '9',
            q2: '18',
            q3: '45',
            q4: '90',
            q5: '180',
            id: '120',
            type: 'spices'
        },
        {
            name: 'ELACHI (3400/kg)',
            q1: '170',
            q2: '340',
            q3: '850',
            q4: '1700',
            q5: '3400',
            id: '121',
            type: 'spices'
        },
        {
            name: 'ELACHI BLACK (1200/kg)',
            q1: '60',
            q2: '120',
            q3: '300',
            q4: '600',
            q5: '1200',
            id: '122',
            type: 'spices'
        },
        {
            name: 'HALDI GOTTO (95/kg)',
            q1: '4.75',
            q2: '9.5',
            q3: '23.75',
            q4: '47.5',
            q5: '95',
            id: '123',
            type: 'spices'
        },
        {
            name: 'HALDI STICK (120/kg)',
            q1: '6',
            q2: '12',
            q3: '30',
            q4: '60',
            q5: '120',
            id: '124',
            type: 'spices'
        },
        {
            name: 'HING KHADA (1500/kg)',
            q1: '75',
            q2: '150',
            q3: '375',
            q4: '750',
            q5: '1500',
            id: '125',
            type: 'spices'
        },
        {
            name: 'HING POWDER (75/kg)',
            q1: '3.75',
            q2: '7.5',
            q3: '18.75',
            q4: '37.5',
            q5: '75',
            id: '126',
            type: 'spices'
        },
        {
            name: 'JAIFHAL (1200/kg)',
            q1: '60',
            q2: '120',
            q3: '300',
            q4: '600',
            q5: '1200',
            id: '127',
            type: 'spices'
        },
        {
            name: 'JAVATRI (3000/kg)',
            q1: '150',
            q2: '300',
            q3: '750',
            q4: '1500',
            q5: '3000',
            id: '128',
            type: 'spices'
        },
        {
            name: 'JEERA (240/kg)',
            q1: '12',
            q2: '24',
            q3: '60',
            q4: '120',
            q5: '240',
            id: '129',
            type: 'spices'
        },
        {
            name: 'KALI MIRCH (580/kg)',
            q1: '29',
            q2: '58',
            q3: '145',
            q4: '290',
            q5: '580',
            id: '130',
            type: 'spices'
        },
        {
            name: 'KALONJI (450/kg)',
            q1: '22.5',
            q2: '45',
            q3: '112.5',
            q4: '225',
            q5: '450',
            id: '131',
            type: 'spices'
        },
        {
            name: 'KARAN PHOOL (1500/kg)',
            q1: '50',
            q2: '100',
            q3: '250',
            q4: '500',
            q5: '1000',
            id: '132',
            type: 'spices'
        },
        {
            name: 'KAWAB CHINI (4000/kg)',
            q1: '200',
            q2: '400',
            q3: '1000',
            q4: '2000',
            q5: '4000',
            id: '133',
            type: 'spices'
        },
        {
            name: 'KESAR (160/kg)',
            q1: '8',
            q2: '16',
            q3: '40',
            q4: '80',
            q5: '160',
            id: '134',
            type: 'spices'
        },
        {
            name: 'KHOPRA (220/kg)',
            q1: '11',
            q2: '22',
            q3: '55',
            q4: '110',
            q5: '220',
            id: '135',
            type: 'spices'
        },
        {
            name: 'KHUSKUS (1400/kg)',
            q1: '70',
            q2: '140',
            q3: '350',
            q4: '700',
            q5: '1400',
            id: '136',
            type: 'spices'
        },
        {
            name: 'LAVANG (900/kg)',
            q1: '45',
            q2: '90',
            q3: '225',
            q4: '450',
            q5: '900',
            id: '137',
            type: 'spices'
        },
        {
            name: 'METHI (110/kg)',
            q1: '5.5',
            q2: '11',
            q3: '27.5',
            q4: '55',
            q5: '110',
            id: '138',
            type: 'spices'
        },
        {
            name: 'PAN METHI (KASTURI METHI) (250/kg)',
            q1: '12.5',
            q2: '25',
            q3: '62.5',
            q4: '125',
            q5: '250',
            id: '139',
            type: 'spices'
        },
        {
            name: 'RAI (80/kg)',
            q1: '4',
            q2: '8',
            q3: '20',
            q4: '40',
            q5: '80',
            id: '140',
            type: 'spices'
        },
        {
            name: 'SHAH JEERA (900/kg)',
            q1: '45',
            q2: '90',
            q3: '225',
            q4: '450',
            q5: '900',
            id: '141',
            type: 'spices'
        },
        {
            name: 'SONTH (580/kg)',
            q1: '29',
            q2: '58',
            q3: '145',
            q4: '290',
            q5: '580',
            id: '142',
            type: 'spices'
        },
        {
            name: 'TEJ PATTA (300/kg)',
            q1: '15',
            q2: '30',
            q3: '75',
            q4: '150',
            q5: '300',
            id: '143',
            type: 'spices'
        },
        {
            name: 'TILLI (140/kg)',
            q1: '7',
            q2: '14',
            q3: '35',
            q4: '70',
            q5: '140',
            id: '144',
            type: 'spices'
        },
        {
            name: 'TILLI (BLACK) (250/kg)',
            q1: '12.5',
            q2: '25',
            q3: '62.5',
            q4: '125',
            q5: '250',
            id: '145',
            type: 'spices'
        },
        {
            name: 'TILLI (NYLON) (200/kg)',
            q1: '10',
            q2: '20',
            q3: '50',
            q4: '100',
            q5: '200',
            id: '146',
            type: 'spices'
        }
    ];
    function getById(id) {
        return data.find((item) => item.id.toString() === id.toString());
    }

    function getName(id) {
        return getById(id).name;
    }

    function getFilteredItems(queryString) {
        return data.filter(
            (item) => item.name.search(new RegExp(queryString, 'i')) > -1
        );
    }

    return {
        getAll: function () {
            return data;
        },
        getById: getById,
        getName: getName,
        getFilteredItems: getFilteredItems
    };
});
