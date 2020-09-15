define(function () {
    const data = [
        {
            name: 'Kaju Premium(940/Kg)',
            q1: '',
            q2: '117.5',
            q3: '235',
            q4: '470',
            q5: '940',
            id: '1',
            type: 'DRYFRUITS'
        },
        {
            name: 'Kaju Regular (820/Kg)',
            q1: '',
            q2: '102.5',
            q3: '205',
            q4: '410',
            q5: '820',
            id: '2',
            type: 'DRYFRUITS'
        },
        {
            name: 'Mamra Badam(3000/Kg)',
            q1: '',
            q2: '375',
            q3: '750',
            q4: '1500',
            q5: '3000',
            id: '3',
            type: 'DRYFRUITS'
        },
        {
            name: 'Badam Regular(620/Kg)',
            q1: '',
            q2: '77.5',
            q3: '155',
            q4: '310',
            q5: '620',
            id: '4',
            type: 'DRYFRUITS'
        },
        {
            name: 'Badam Premium(780/Kg)',
            q1: '',
            q2: '97.5',
            q3: '195',
            q4: '390',
            q5: '780',
            id: '5',
            type: 'DRYFRUITS'
        },
        {
            name: 'Pista Salted (960/Kg)',
            q1: '',
            q2: '120',
            q3: '240',
            q4: '480',
            q5: '960',
            id: '6',
            type: 'DRYFRUITS'
        },
        {
            name: 'Pista Plain (1300/Kg)',
            q1: '',
            q2: '162.5',
            q3: '325',
            q4: '650',
            q5: '1300',
            id: '7',
            type: 'DRYFRUITS'
        },
        {
            name: 'Manuka (640/Kg)',
            q1: '',
            q2: '80',
            q3: '160',
            q4: '320',
            q5: '640',
            id: '8',
            type: 'DRYFRUITS'
        },
        {
            name: 'Kishmish Premium (520/Kg)',
            q1: '',
            q2: '65',
            q3: '130',
            q4: '260',
            q5: '520',
            id: '9',
            type: 'DRYFRUITS'
        },
        {
            name: 'Kishmish Black (540/Kg)',
            q1: '',
            q2: '67.5',
            q3: '135',
            q4: '270',
            q5: '540',
            id: '10',
            type: 'DRYFRUITS'
        },
        {
            name: 'Kishmish Green (320/Kg)',
            q1: '',
            q2: '40',
            q3: '80',
            q4: '160',
            q5: '320',
            id: '11',
            type: 'DRYFRUITS'
        },
        {
            name: 'Anjeer (1140/kg)',
            q1: '',
            q2: '142.5',
            q3: '285',
            q4: '570',
            q5: '1140',
            id: '12',
            type: 'DRYFRUITS'
        },
        {
            name: 'Walnut Kernels (1200/Kg)',
            q1: '',
            q2: '150',
            q3: '300',
            q4: '600',
            q5: '1200',
            id: '13',
            type: 'DRYFRUITS'
        },
        {
            name: 'Apricot/Jardalu (600/Kg)',
            q1: '',
            q2: '75',
            q3: '150',
            q4: '300',
            q5: '600',
            id: '14',
            type: 'DRYFRUITS'
        },
        {
            name: 'Pine Nut/Chilgoza Magaz (6800/Kg)',
            q1: '',
            q2: '850',
            q3: '1700',
            q4: '3400',
            q5: '6800',
            id: '15',
            type: 'DRYFRUITS'
        },
        {
            name: 'Chironji (1600/Kg)',
            q1: '',
            q2: '200',
            q3: '400',
            q4: '800',
            q5: '1600',
            id: '16',
            type: 'DRYFRUITS'
        },
        {
            name: 'Dates Seedless (160/Kg)',
            q1: '',
            q2: '20',
            q3: '40',
            q4: '80',
            q5: '160',
            id: '17',
            type: 'DRYFRUITS'
        },
        {
            name: 'Dry Dates / Kharik (360/Kg)',
            q1: '',
            q2: '45',
            q3: '90',
            q4: '180',
            q5: '360',
            id: '18',
            type: 'DRYFRUITS'
        },
        {
            name: 'Kaju 2Pcs (780/Kg)',
            q1: '',
            q2: '97.5',
            q3: '195',
            q4: '390',
            q5: '780',
            id: '19',
            type: 'DRYFRUITS'
        },
        {
            name: 'Kaju 4Pcs (620/Kg)',
            q1: '',
            q2: '77.5',
            q3: '155',
            q4: '310',
            q5: '620',
            id: '20',
            type: 'DRYFRUITS'
        },
        {
            name: 'Dry Alubukhara Red (300/kg)',
            q1: '',
            q2: '37.5',
            q3: '75',
            q4: '150',
            q5: '300',
            id: '21',
            type: 'DRYFRUITS'
        },
        {
            name: 'Chia Seeds (400/Kg)',
            q1: '',
            q2: '50',
            q3: '100',
            q4: '200',
            q5: '400',
            id: '22',
            type: 'Seeds'
        },
        {
            name: 'Sabja (300/kg)',
            q1: '',
            q2: '37.5',
            q3: '75',
            q4: '150',
            q5: '300',
            id: '23',
            type: 'Seeds'
        },
        {
            name: 'Makhana (940/Kg)',
            q1: '',
            q2: '117.5',
            q3: '235',
            q4: '470',
            q5: '940',
            id: '24',
            type: 'Seeds'
        },
        {
            name: 'Flax Seeds (alsi) (99/kg)',
            q1: '',
            q2: '12.375',
            q3: '24.75',
            q4: '49.5',
            q5: '99',
            id: '25',
            type: 'Seeds'
        },
        {
            name: 'Pumpkin Seeds (600/Kg)',
            q1: '',
            q2: '75',
            q3: '150',
            q4: '300',
            q5: '600',
            id: '26',
            type: 'Seeds'
        },
        {
            name: 'Sunflower Seeds (400/Kg)',
            q1: '',
            q2: '50',
            q3: '100',
            q4: '200',
            q5: '400',
            id: '27',
            type: 'Seeds'
        },
        {
            name: 'Kharbooj Seeds (500/Kg)',
            q1: '',
            q2: '62.5',
            q3: '125',
            q4: '250',
            q5: '500',
            id: '28',
            type: 'Seeds'
        },
        {
            name: 'Tarbooz Seeds (240/Kg)',
            q1: '',
            q2: '30',
            q3: '60',
            q4: '120',
            q5: '240',
            id: '29',
            type: 'Seeds'
        },
        {
            name: 'Fennel Seeds (saunf)(250/Kg)',
            q1: '',
            q2: '31.25',
            q3: '62.5',
            q4: '125',
            q5: '250',
            id: '30',
            type: 'Seeds'
        },
        {
            name: 'Popcorn Seeds (120/kg)',
            q1: '',
            q2: '15',
            q3: '30',
            q4: '60',
            q5: '120',
            id: '31',
            type: 'Seeds'
        },
        {
            name: 'Toor Dal (98/kg)',
            q1: '',
            q2: '12.25',
            q3: '24.5',
            q4: '49',
            q5: '98',
            id: '32',
            type: 'Dals'
        },
        {
            name: 'Chana Dal (88/kg)',
            q1: '',
            q2: '11',
            q3: '22',
            q4: '44',
            q5: '88',
            id: '33',
            type: 'Dals'
        },
        {
            name: 'White Urad Dal Split (125/kg)',
            q1: '',
            q2: '15.625',
            q3: '31.25',
            q4: '62.5',
            q5: '125',
            id: '34',
            type: 'Dals'
        },
        {
            name: 'White Urad Whole (Gundu) (110/kg)',
            q1: '',
            q2: '13.75',
            q3: '27.5',
            q4: '55',
            q5: '110',
            id: '35',
            type: 'Dals'
        },
        {
            name: 'Black Urad Dal Split (120/kg)',
            q1: '',
            q2: '15',
            q3: '30',
            q4: '60',
            q5: '120',
            id: '36',
            type: 'Dals'
        },
        {
            name: 'Black Urad Whole (110/kg)',
            q1: '',
            q2: '13.75',
            q3: '27.5',
            q4: '55',
            q5: '110',
            id: '37',
            type: 'Dals'
        },
        {
            name: 'Masoor Dal (Red) (105/kg)',
            q1: '',
            q2: '13.125',
            q3: '26.25',
            q4: '52.5',
            q5: '105',
            id: '38',
            type: 'Dals'
        },
        {
            name: 'Masoor Whole(Black) (105/kg)',
            q1: '',
            q2: '13.125',
            q3: '26.25',
            q4: '52.5',
            q5: '105',
            id: '39',
            type: 'Dals'
        },
        {
            name: 'Green Moong Dal Chilka (120/kg)',
            q1: '',
            q2: '15',
            q3: '30',
            q4: '60',
            q5: '120',
            id: '40',
            type: 'Dals'
        },
        {
            name: 'Yellow Moong Dal (118/kg)',
            q1: '',
            q2: '14.75',
            q3: '29.5',
            q4: '59',
            q5: '118',
            id: '41',
            type: 'Dals'
        },
        {
            name: 'White Peas (100/kg)',
            q1: '',
            q2: '12.5',
            q3: '25',
            q4: '50',
            q5: '100',
            id: '42',
            type: 'Dals'
        },
        {
            name: 'Green Peas (200/kg)',
            q1: '',
            q2: '25',
            q3: '50',
            q4: '100',
            q5: '200',
            id: '43',
            type: 'Dals'
        },
        {
            name: 'Kulti(Horsegram) Black (80/kg)',
            q1: '',
            q2: '10',
            q3: '20',
            q4: '40',
            q5: '80',
            id: '44',
            type: 'Dals'
        },
        {
            name: 'Kulti(Horsegram) White (80/kg)',
            q1: '',
            q2: '10',
            q3: '20',
            q4: '40',
            q5: '80',
            id: '45',
            type: 'Dals'
        },
        {
            name: 'Green Moong (125/kg)',
            q1: '',
            q2: '15.625',
            q3: '31.25',
            q4: '62.5',
            q5: '125',
            id: '46',
            type: 'PULSES'
        },
        {
            name: 'Kabuli Chana (110/kg)',
            q1: '',
            q2: '13.75',
            q3: '27.5',
            q4: '55',
            q5: '110',
            id: '47',
            type: 'PULSES'
        },
        {
            name: 'Red (Kala) Chana (78/kg)',
            q1: '',
            q2: '9.75',
            q3: '19.5',
            q4: '39',
            q5: '78',
            id: '48',
            type: 'PULSES'
        },
        {
            name: 'Red Lobiya (105/kg)',
            q1: '',
            q2: '13.125',
            q3: '26.25',
            q4: '52.5',
            q5: '105',
            id: '49',
            type: 'PULSES'
        },
        {
            name: 'White Lobiya (100/kg)',
            q1: '',
            q2: '12.5',
            q3: '25',
            q4: '50',
            q5: '100',
            id: '50',
            type: 'PULSES'
        },
        {
            name: 'Moth (Matki) (100/kg)',
            q1: '',
            q2: '12.5',
            q3: '25',
            q4: '50',
            q5: '100',
            id: '51',
            type: 'PULSES'
        },
        {
            name: 'Red Rajma (120/kg)',
            q1: '',
            q2: '15',
            q3: '30',
            q4: '60',
            q5: '120',
            id: '52',
            type: 'PULSES'
        },
        {
            name: 'White Rajma (130/kg)',
            q1: '',
            q2: '16.25',
            q3: '32.5',
            q4: '65',
            q5: '130',
            id: '53',
            type: 'PULSES'
        },
        {
            name: 'Sharmili Rajma (Red) (120/kg)',
            q1: '',
            q2: '15',
            q3: '30',
            q4: '60',
            q5: '120',
            id: '54',
            type: 'PULSES'
        },
        {
            name: 'Elachi(Cardamom) (3400)',
            q1: '',
            q2: '425',
            q3: '850',
            q4: '1700',
            q5: '3400',
            id: '55',
            type: 'SPICES'
        },
        {
            name: 'Lavang(Clove) (900/kg)',
            q1: '',
            q2: '112.5',
            q3: '225',
            q4: '450',
            q5: '900',
            id: '56',
            type: 'SPICES'
        },
        {
            name: 'DalChini(Cinnamon) (380 kg)',
            q1: '',
            q2: '47.5',
            q3: '95',
            q4: '190',
            q5: '380',
            id: '57',
            type: 'SPICES'
        },
        {
            name: 'Shah Jeera (900/kg)',
            q1: '',
            q2: '112.5',
            q3: '225',
            q4: '450',
            q5: '900',
            id: '58',
            type: 'SPICES'
        },
        {
            name: 'Kali Mirch(580/kg)',
            q1: '',
            q2: '72.5',
            q3: '145',
            q4: '290',
            q5: '580',
            id: '59',
            type: 'SPICES'
        },
        {
            name: 'Jeera (240)',
            q1: '',
            q2: '30',
            q3: '60',
            q4: '120',
            q5: '240',
            id: '60',
            type: 'SPICES'
        },
        {
            name: 'Dhaniya (180 kg)',
            q1: '',
            q2: '22.5',
            q3: '45',
            q4: '90',
            q5: '180',
            id: '61',
            type: 'SPICES'
        },
        {
            name: 'Rai Big(80/kg)',
            q1: '',
            q2: '10',
            q3: '20',
            q4: '40',
            q5: '80',
            id: '62',
            type: 'SPICES'
        },
        {
            name: 'Rai Small (85/kg)',
            q1: '',
            q2: '10.625',
            q3: '21.25',
            q4: '42.5',
            q5: '85',
            id: '63',
            type: 'SPICES'
        },
        {
            name: 'Methi (110/kg)',
            q1: '',
            q2: '13.75',
            q3: '27.5',
            q4: '55',
            q5: '110',
            id: '64',
            type: 'SPICES'
        },
        {
            name: 'Till (White)(140/kg)',
            q1: '',
            q2: '17.5',
            q3: '35',
            q4: '70',
            q5: '140',
            id: '65',
            type: 'SPICES'
        },
        {
            name: 'Till(Black) (250/kg)',
            q1: '',
            q2: '31.25',
            q3: '62.5',
            q4: '125',
            q5: '250',
            id: '66',
            type: 'SPICES'
        },
        {
            name: 'Till (Nylon) (200/kg',
            q1: '',
            q2: '25',
            q3: '50',
            q4: '100',
            q5: '200',
            id: '67',
            type: 'SPICES'
        },
        {
            name: 'Khuskus (1400/kg)',
            q1: '',
            q2: '175',
            q3: '350',
            q4: '700',
            q5: '1400',
            id: '68',
            type: 'SPICES'
        },
        {
            name: 'Jaifhal (nutmeg) (1200/kg)',
            q1: '',
            q2: '150',
            q3: '300',
            q4: '600',
            q5: '1200',
            id: '69',
            type: 'SPICES'
        },
        {
            name: 'Javatri (mace) (3000/kg)',
            q1: '',
            q2: '375',
            q3: '750',
            q4: '1500',
            q5: '3000',
            id: '70',
            type: 'SPICES'
        },
        {
            name: 'Kalonji (450/kg)',
            q1: '',
            q2: '56.25',
            q3: '112.5',
            q4: '225',
            q5: '450',
            id: '71',
            type: 'SPICES'
        },
        {
            name: 'Hing Powder 50 Gms (75)',
            q1: '',
            q2: '9.375',
            q3: '18.75',
            q4: '37.5',
            q5: '75',
            id: '72',
            type: 'SPICES'
        },
        {
            name: 'Hing Khada (1500 kg)',
            q1: '',
            q2: '187.5',
            q3: '375',
            q4: '750',
            q5: '1500',
            id: '73',
            type: 'SPICES'
        },
        {
            name: 'Dry Chilli (200/kg)',
            q1: '',
            q2: '25',
            q3: '50',
            q4: '100',
            q5: '200',
            id: '74',
            type: 'SPICES'
        },
        {
            name: 'Tej Patta (300/kg)',
            q1: '',
            q2: '37.5',
            q3: '75',
            q4: '150',
            q5: '300',
            id: '75',
            type: 'SPICES'
        },
        {
            name: 'Biryani Phool (1200/kg)',
            q1: '',
            q2: '150',
            q3: '300',
            q4: '600',
            q5: '1200',
            id: '76',
            type: 'SPICES'
        },
        {
            name: 'Karan Phool (1000/kg)',
            q1: '',
            q2: '125',
            q3: '250',
            q4: '500',
            q5: '1000',
            id: '77',
            type: 'SPICES'
        },
        {
            name: 'Kawab Chini (4000/kg)',
            q1: '',
            q2: '500',
            q3: '1000',
            q4: '2000',
            q5: '4000',
            id: '78',
            type: 'SPICES'
        },
        {
            name: 'Elachi Black (1200/kg)',
            q1: '',
            q2: '150',
            q3: '300',
            q4: '600',
            q5: '1200',
            id: '79',
            type: 'SPICES'
        },
        {
            name: 'Haldi Gotto (95 kg)',
            q1: '',
            q2: '11.875',
            q3: '23.75',
            q4: '47.5',
            q5: '95',
            id: '80',
            type: 'SPICES'
        },
        {
            name: 'Haldi Stick (120/kg)',
            q1: '',
            q2: '15',
            q3: '30',
            q4: '60',
            q5: '120',
            id: '81',
            type: 'SPICES'
        },
        {
            name: 'Ajwain (300/kg)',
            q1: '',
            q2: '37.5',
            q3: '75',
            q4: '150',
            q5: '300',
            id: '82',
            type: 'SPICES'
        },
        {
            name: 'Sonth (580/kg)',
            q1: '',
            q2: '72.5',
            q3: '145',
            q4: '290',
            q5: '580',
            id: '83',
            type: 'SPICES'
        },
        {
            name: 'Kesar 1 Gms (160)',
            q1: '',
            q2: '20',
            q3: '40',
            q4: '80',
            q5: '160',
            id: '84',
            type: 'SPICES'
        },
        {
            name: 'Pan Methi (Kasturi Methi) (250/kg)',
            q1: '',
            q2: '31.25',
            q3: '62.5',
            q4: '125',
            q5: '250',
            id: '85',
            type: 'SPICES'
        },
        {
            name: 'Black Salt Powder(80/kg)',
            q1: '',
            q2: '10',
            q3: '20',
            q4: '40',
            q5: '80',
            id: '86',
            type: 'SPICES'
        },
        {
            name: 'Citric Acid (200/kg)',
            q1: '',
            q2: '25',
            q3: '50',
            q4: '100',
            q5: '200',
            id: '87',
            type: 'SPICES'
        },
        {
            name: 'Ajinomoto (180/kg)',
            q1: '',
            q2: '22.5',
            q3: '45',
            q4: '90',
            q5: '180',
            id: '88',
            type: 'SPICES'
        },
        {
            name: 'Curd Chilly (300/kg)',
            q1: '',
            q2: '37.5',
            q3: '75',
            q4: '150',
            q5: '300',
            id: '89',
            type: 'SPICES'
        },
        {
            name: 'Pooja Supari (440/kg)',
            q1: '',
            q2: '55',
            q3: '110',
            q4: '220',
            q5: '440',
            id: '90',
            type: 'SPICES'
        },
        {
            name: 'Rawa Supari (550/kg)',
            q1: '',
            q2: '68.75',
            q3: '137.5',
            q4: '275',
            q5: '550',
            id: '91',
            type: 'SPICES'
        },
        {
            name: 'Sugar (39/kg)',
            q1: '',
            q2: '4.875',
            q3: '9.75',
            q4: '19.5',
            q5: '39',
            id: '92',
            type: 'GroceryItems'
        },
        {
            name: 'Jaggery Kolhapuri (65/kg)',
            q1: '',
            q2: '8.125',
            q3: '16.25',
            q4: '32.5',
            q5: '65',
            id: '93',
            type: 'GroceryItems'
        },
        {
            name: 'Jaggery Powder Natural (110/kg)',
            q1: '',
            q2: '13.75',
            q3: '27.5',
            q4: '55',
            q5: '110',
            id: '94',
            type: 'GroceryItems'
        },
        {
            name: 'Groundnut (Phali)(120/kg)',
            q1: '',
            q2: '15',
            q3: '30',
            q4: '60',
            q5: '120',
            id: '95',
            type: 'GroceryItems'
        },
        {
            name: 'Phutana Dal (95/kg)',
            q1: '',
            q2: '11.875',
            q3: '23.75',
            q4: '47.5',
            q5: '95',
            id: '96',
            type: 'GroceryItems'
        },
        {
            name: 'Bhagar (120/kg)',
            q1: '',
            q2: '15',
            q3: '30',
            q4: '60',
            q5: '120',
            id: '97',
            type: 'GroceryItems'
        },
        {
            name: 'Tamarind (Imli) (280/kg)',
            q1: '',
            q2: '35',
            q3: '70',
            q4: '140',
            q5: '280',
            id: '98',
            type: 'GroceryItems'
        },
        {
            name: 'Sendha Salt Powder (60/kg)',
            q1: '',
            q2: '7.5',
            q3: '15',
            q4: '30',
            q5: '60',
            id: '99',
            type: 'GroceryItems'
        },
        {
            name: 'Khopra (220/kg)',
            q1: '',
            q2: '27.5',
            q3: '55',
            q4: '110',
            q5: '220',
            id: '100',
            type: 'GroceryItems'
        },
        {
            name: 'Gota Khopra (200/kg)',
            q1: '',
            q2: '25',
            q3: '50',
            q4: '100',
            q5: '200',
            id: '101',
            type: 'GroceryItems'
        },
        {
            name: 'Mota Misri (80/kg)',
            q1: '',
            q2: '10',
            q3: '20',
            q4: '40',
            q5: '80',
            id: '102',
            type: 'GroceryItems'
        },
        {
            name: 'Corn Flour (60/kg)',
            q1: '',
            q2: '7.5',
            q3: '15',
            q4: '30',
            q5: '60',
            id: '103',
            type: 'GroceryItems'
        },
        {
            name: 'Starch Powder (100/kg)',
            q1: '',
            q2: '12.5',
            q3: '25',
            q4: '50',
            q5: '100',
            id: '104',
            type: 'GroceryItems'
        },
        {
            name: 'Dali Gondh (320/kg)',
            q1: '',
            q2: '40',
            q3: '80',
            q4: '160',
            q5: '320',
            id: '105',
            type: 'GroceryItems'
        },
        {
            name: 'Retha (Soap Nut) (140/kg)',
            q1: '',
            q2: '17.5',
            q3: '35',
            q4: '70',
            q5: '140',
            id: '106',
            type: 'GroceryItems'
        },
        {
            name: 'Shikakai (250/kg)',
            q1: '',
            q2: '31.25',
            q3: '62.5',
            q4: '125',
            q5: '250',
            id: '107',
            type: 'GroceryItems'
        },
        {
            name: 'Basmati Rice IndiaGate Classic (180/kg)',
            q1: '',
            q2: '22.5',
            q3: '45',
            q4: '90',
            q5: '180',
            id: '108',
            type: 'GroceryItems'
        },
        {
            name: 'Mota Poha (55/kg)',
            q1: '',
            q2: '6.875',
            q3: '13.75',
            q4: '27.5',
            q5: '55',
            id: '109',
            type: 'PohaandPappad'
        },
        {
            name: 'Fine Poha (64/kg)',
            q1: '',
            q2: '8',
            q3: '16',
            q4: '32',
            q5: '64',
            id: '110',
            type: 'PohaandPappad'
        },
        {
            name: 'Murmura (45 /500 Gms Box)',
            q1: '',
            q2: '5.625',
            q3: '11.25',
            q4: '22.5',
            q5: '45',
            id: '111',
            type: 'PohaandPappad'
        },
        {
            name: 'Makkai Poha 400Gms (80/kg)',
            q1: '',
            q2: '10',
            q3: '20',
            q4: '40',
            q5: '80',
            id: '112',
            type: 'PohaandPappad'
        },
        {
            name: 'Frymes (90/kg)',
            q1: '',
            q2: '11.25',
            q3: '22.5',
            q4: '45',
            q5: '90',
            id: '113',
            type: 'PohaandPappad'
        },
        {
            name: 'Gold Finger (60/kg)',
            q1: '',
            q2: '7.5',
            q3: '15',
            q4: '30',
            q5: '60',
            id: '114',
            type: 'PohaandPappad'
        },
        {
            name: 'Meal Maker (Soya Chunks) (40/200gms box)',
            q1: '',
            q2: '25',
            q3: '50',
            q4: '100',
            q5: '200',
            id: '115',
            type: 'PohaandPappad'
        },
        {
            name: 'Soya Granuels (44/200gm Box)',
            q1: '',
            q2: '27.5',
            q3: '55',
            q4: '110',
            q5: '220',
            id: '116',
            type: 'PohaandPappad'
        },
        {
            name: 'Papad (Appalam) (250/kg)',
            q1: '',
            q2: '31.25',
            q3: '62.5',
            q4: '125',
            q5: '250',
            id: '117',
            type: 'PohaandPappad'
        },
        {
            name: 'Papad (Marwadi) (240/kg)',
            q1: '',
            q2: '30',
            q3: '60',
            q4: '120',
            q5: '240',
            id: '118',
            type: 'PohaandPappad'
        },
        {
            name: 'Aashirwad Aata 5kg bag (119/kg)',
            q1: '',
            q2: '14.87',
            q3: '29.75',
            q4: '59.5',
            q5: '119',
            id: '119',
            type: 'GrainsandCereals'
        },
        {
            name: 'Upma Rava(Bombay Rava) (44/kg)',
            q1: '',
            q2: '5.5',
            q3: '11',
            q4: '22',
            q5: '44',
            id: '120',
            type: 'GrainsandCereals'
        },
        {
            name: 'Idly Rava (38/kg)',
            q1: '',
            q2: '4.75',
            q3: '9.5',
            q4: '19',
            q5: '38',
            id: '121',
            type: 'GrainsandCereals'
        },
        {
            name: 'Kesari Rawa (52/kg)',
            q1: '',
            q2: '6.5',
            q3: '13',
            q4: '26',
            q5: '52',
            id: '122',
            type: 'GrainsandCereals'
        },
        {
            name: 'Medium Wheat Rawa (daliya) (52/kg)',
            q1: '',
            q2: '6.5',
            q3: '13',
            q4: '26',
            q5: '52',
            id: '123',
            type: 'GrainsandCereals'
        },
        {
            name: 'Mota Wheat Rawa (lapsi)(52/kg)',
            q1: '',
            q2: '6.5',
            q3: '13',
            q4: '26',
            q5: '52',
            id: '124',
            type: 'GrainsandCereals'
        },
        {
            name: 'Besan (84/kg)',
            q1: '',
            q2: '10.5',
            q3: '21',
            q4: '42',
            q5: '84',
            id: '125',
            type: 'GrainsandCereals'
        },
        {
            name: 'Maida (44/kg)',
            q1: '',
            q2: '5.5',
            q3: '11',
            q4: '22',
            q5: '44',
            id: '126',
            type: 'GrainsandCereals'
        },
        {
            name: 'Ragi (50/kg)',
            q1: '',
            q2: '6.25',
            q3: '12.5',
            q4: '25',
            q5: '50',
            id: '127',
            type: 'GrainsandCereals'
        },
        {
            name: 'Raagi Atta (52/kg)',
            q1: '',
            q2: '6.5',
            q3: '13',
            q4: '26',
            q5: '52',
            id: '128',
            type: 'GrainsandCereals'
        },
        {
            name: 'Rice Atta (40/kg)',
            q1: '',
            q2: '5',
            q3: '10',
            q4: '20',
            q5: '40',
            id: '129',
            type: 'GrainsandCereals'
        },
        {
            name: 'Bajra (47/kg)',
            q1: '',
            q2: '5.875',
            q3: '11.75',
            q4: '23.5',
            q5: '47',
            id: '130',
            type: 'GrainsandCereals'
        },
        {
            name: 'Bajri Atta (60/kg)',
            q1: '',
            q2: '7.5',
            q3: '15',
            q4: '30',
            q5: '60',
            id: '131',
            type: 'GrainsandCereals'
        },
        {
            name: 'Jawari (â‚¹ 75/kg)',
            q1: '',
            q2: '9.375',
            q3: '18.75',
            q4: '37.5',
            q5: '75',
            id: '132',
            type: 'GrainsandCereals'
        },
        {
            name: 'Jawari Atta (62/kg)',
            q1: '',
            q2: '7.75',
            q3: '15.5',
            q4: '31',
            q5: '62',
            id: '133',
            type: 'GrainsandCereals'
        },
        {
            name: 'Makkai Atta (65/kg)',
            q1: '',
            q2: '8.125',
            q3: '16.25',
            q4: '32.5',
            q5: '65',
            id: '134',
            type: 'GrainsandCereals'
        },
        {
            name: 'Barley (70/kg)',
            q1: '',
            q2: '8.75',
            q3: '17.5',
            q4: '35',
            q5: '70',
            id: '135',
            type: 'GrainsandCereals'
        },
        {
            name: 'Flax Seeds (Alsi) (99/kg)',
            q1: '',
            q2: '12.375',
            q3: '24.75',
            q4: '49.5',
            q5: '99',
            id: '136',
            type: 'MouthFreshner'
        },
        {
            name: 'Cherry (200/kg)',
            q1: '',
            q2: '25',
            q3: '50',
            q4: '100',
            q5: '200',
            id: '137',
            type: 'MouthFreshner'
        },
        {
            name: 'Mota Sounf (250/kg)',
            q1: '',
            q2: '31.25',
            q3: '62.5',
            q4: '125',
            q5: '250',
            id: '138',
            type: 'MouthFreshner'
        },
        {
            name: 'Diamond Misri (80/kg)',
            q1: '',
            q2: '10',
            q3: '20',
            q4: '40',
            q5: '80',
            id: '139',
            type: 'MouthFreshner'
        },
        {
            name: 'Small Saunf (240/kg)',
            q1: '',
            q2: '30',
            q3: '60',
            q4: '120',
            q5: '240',
            id: '140',
            type: 'MouthFreshner'
        },
        {
            name: 'Sukhmukh (Dhana Dal) (240/kg)',
            q1: '',
            q2: '30',
            q3: '60',
            q4: '120',
            q5: '240',
            id: '141',
            type: 'MouthFreshner'
        },
        {
            name: 'Sweet Saunf (100/kg)',
            q1: '',
            q2: '12.5',
            q3: '25',
            q4: '50',
            q5: '100',
            id: '142',
            type: 'MouthFreshner'
        },
        {
            name: 'Tuti Fruti (120/kg)',
            q1: '',
            q2: '15',
            q3: '30',
            q4: '60',
            q5: '120',
            id: '143',
            type: 'MouthFreshner'
        },
        {
            name: 'Khopra Powder (240/kg)',
            q1: '',
            q2: '30',
            q3: '60',
            q4: '120',
            q5: '240',
            id: '144',
            type: 'MouthFreshner'
        },
        {
            name: 'India Gate Brown Sona Masoori (119/kg)',
            q1: '',
            q2: '14.875',
            q3: '29.75',
            q4: '59.5',
            q5: '119',
            id: '145',
            type: 'RICE'
        },
        {
            name: 'Sona Masoori Rice (old) (47/kg)',
            q1: '',
            q2: '5.875',
            q3: '11.75',
            q4: '23.5',
            q5: '47',
            id: '146',
            type: 'RICE'
        },
        {
            name: 'Sona Masoori Rice (25 kg bag)(44/kg)',
            q1: '',
            q2: '5.5',
            q3: '11',
            q4: '22',
            q5: '44',
            id: '147',
            type: 'RICE'
        },
        {
            name: 'HMT rice (51/kg)',
            q1: '',
            q2: '6.375',
            q3: '12.75',
            q4: '25.5',
            q5: '51',
            id: '148',
            type: 'RICE'
        },
        {
            name: 'Kollam Rice (54/kg)',
            q1: '',
            q2: '6.75',
            q3: '13.5',
            q4: '27',
            q5: '54',
            id: '149',
            type: 'RICE'
        },
        {
            name: 'Sona Masoori Steam Rice (42/kg)',
            q1: '',
            q2: '5.25',
            q3: '10.5',
            q4: '21',
            q5: '42',
            id: '150',
            type: 'RICE'
        },
        {
            name: 'Basmati Rice India Gate brown (139/kg)',
            q1: '',
            q2: '17.375',
            q3: '34.75',
            q4: '69.5',
            q5: '139',
            id: '151',
            type: 'RICE'
        },
        {
            name: 'GoldDrop Sunflower Oil (115/-)',
            q1: '',
            q2: '14.375',
            q3: '28.75',
            q4: '57.5',
            q5: '115',
            id: '152',
            type: 'Oil'
        },
        {
            name: 'SunDrop Sunflower Oil (189/-)',
            q1: '',
            q2: '23.625',
            q3: '47.25',
            q4: '94.5',
            q5: '189',
            id: '153',
            type: 'Oil'
        },
        {
            name: 'Freedom Sunflower OIl (110/-)',
            q1: '',
            q2: '13.75',
            q3: '27.5',
            q4: '55',
            q5: '110',
            id: '154',
            type: 'Oil'
        },
        {
            name: 'Vijaya Ghee (470/-)',
            q1: '',
            q2: '58.75',
            q3: '117.5',
            q4: '235',
            q5: '470',
            id: '155',
            type: 'Oil'
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
