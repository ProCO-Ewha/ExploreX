// 텍스트 데이터를 파싱하여 객체 배열로 만듭니다.
const dataText = `
universityname\tcountry\tgrade\tlanguage\tlanguage2\tdormitory
Louisiana State University\tUSA\t2.5\t영어권\tNULL\tGuaranteed, but students need to apply
Arcadia University\tUSA\t3\t영어권\tNULL\tGuaranteed, but students need to apply
Roanoke College\tUSA\t3\t영어권\tNULL\tGuaranteed, and students do not need to apply
Temple University\tUSA\t3\t영어권\tNULL\tNot guaranteed, but students can apply
The Ohio State University\tUSA\t3\t영어권\tNULL\tNot guaranteed, but students can apply
University of Exeter\tUnited Kingdom\t3\t영어권\tNULL\tGuaranteed for full year students
Wilfrid Laurier University\tCanada\t0\t영어권\tNULL\tNot guaranteed, but students can apply
Bellarmine University\tUSA\t1\t영어권\tNULL\tAn official score report from one of the following: i.
University of Hawaii at Manoa\tUSA\t2.5\t영어권\tNULL\tNot guaranteed, but students can apply
University of Nevada, Reno\tUSA\t2.75\t영어권\tNULL\tNot guaranteed, but students can apply
University of New Mexico\tUSA\t3\t영어권\tNULL\tNot guaranteed, but students can apply
Western Carolina University\tUSA\t0\t영어권\tNULL\tGuaranteed, but students need to apply
Lancaster University\tUnited Kingdom\t3\t영어권\tNULL\tGuaranteed, but students need to apply
King's College London\tUnited Kingdom\t3.3\t영어권\tNULL\tNot guaranteed, but students can apply
American University\tUnited States\t3\t영어권\tNULL\tNot guaranteed, but students can apply
The University of Hong Kong\tHong Kong\t3.33\t영어권\tNULL\tNot guaranteed, but students can apply
The George Washington University\tUSA\t3\t영어권\tNULL\tGuaranteed, but students need to apply
Saint Mary's College\tUSA\t3.3\t영어권\tNULL\tGuaranteed, and students do not need to apply
University of Manchester\tUnited Kingdom\t0\t영어권\tNULL\tGuaranteed for full year students
Frankfurt University of Applied Sciences\tGermany\t3\t영어권\tNULL\tGuaranteed, but students need to apply
University of Applied Sciences and Arts North\tSwitzerland\t0\t독일어권\t영어권\tNot guaranteed, but students can apply
lund university\tSweden\t0\t스웨덴어권\t영어원\tNot guaranteed, but students can apply
University of the Fraser Valley\tCanada\t0\t영어권\tNULL\tNot guaranteed, but students can apply
Alverno College\tUSA\t3\t영어권\tNULL\tGuaranteed, but students need to apply
University of Massachusetts Amherst\tUSA\t3\t영어권\tNULL\tGuaranteed, but students need to apply
NHL Stenden university of applied sciences\tThe Netherlands\t0\t영어권\tNULL\tGuaranteed, but students need to apply
Osnabrück University\tGermany\t0\t독일어권\t영어권\tNot guaranteed, but students can apply
Ritsumeikan Asia Pacific University\tJapan\t2\t일어권\t영어권\tGuaranteed, and students do not need to apply
Sapienza University of Rome\tItaly\t0\t이탈리아어권\tNULL\tWe have an intermediary service which can help students in finding a private accommodation.
Sciences Po Rennes\tFrance\t0\t불어권\t영어권\tNot guaranteed, but students can apply
Sciences Po Lille\tFrance\t0\t불어권\t영어권\tStudents need to find their own housing by themselves.
Tatung University\tTaiwan\t0\t중어권\tNULL\tGuaranteed, but students need to apply
Kansai Gaidai University\tJapan\t3\t영어권\tNULL\tGuaranteed, and students do not need to apply
National Taiwan University\tTaiwan\t3\t중어권\t영어권\tNot guaranteed, but students can apply
National Taiwan Normal University\tTaiwan\t3\t중어권\t영어권\tNot guaranteed, but students can apply
University of Applied Sciences Upper Austria\tAustria\t2.8\t영어권\tNULL\tStudents need to find their own housing by themselves.
Univiersidad Carlos III de Madrid\tSpain\t0\t스페인어권\t영어권\tNot guaranteed, but students can apply
Hochschule Düsseldorf - University of Applied\tGermany\t0\t독일어권\t영어권\tNot guaranteed, but students can apply
University of Navarra\tSpain\t2.7\t스페인어권\t영어권\tStudents need to find their own housing by themselves.
Karelia University of Applied Sciences\tFinland\t0\t핀란드어권\t영어원\tNot guaranteed, but students can apply
University of Strasbourg\tFrance\t0\t불어권\t영어권\tNot guaranteed, but students can apply
University of New South Wales\tAustralia\t3\t영어권\tNULL\tNot guaranteed, but students can apply
Kwansei Gakuin University\tJapan\t0\t일어권\t영어권\tNot guaranteed, but students can apply
Ca' Foscari University of Venice\tItaly\t0\t이탈리아어권\t영어권\tThe student will be supported in search for accommodation by Ca’ Foscari University Housing Office.
Abat Oliba CEU University\tSpain\t0\t스페인어권\t영어권\tStudents need to find their own housing by themselves.
Mykolas Romeris University\tLithuania\t0\t리투아니아어권\t영어권\tGuaranteed, but students need to apply
Fukuoka University\tJapan\t0\t일어권\tNULL\tGuaranteed, and students do not need to apply
Paris 1 University Panthéon-Sorbonne\tFrance\t0\t불어권\tNULL\tNot guaranteed, but students can apply
IHECS\tBelgium\t0\t불어권\t영어권\tStudents need to find their own housing by themselves.
Freie Universitat Berlin\tGermany\t0\t독일어권\tNULL\tNot guaranteed, but students can apply
University of Bergen\tNorway\t0\t노르웨이어권\t영어권\tGuaranteed, but students need to apply
Université de Versailles Saint Quentin en Yve\tFrance\t0\t불어권\tNULL\tGuaranteed, but students need to apply
Maastricht University School of Business and\tThe Netherlands\t0\t영어권\tNULL\tStudents need to find their own housing by themselves.
Amsterdam University of Applied Sciences\tThe Netherlands\t0\t네덜란드어권\tNULL\tNot guaranteed, but students can apply
Osaka University of Economics and Law\tJapan\t0\t일어권\tNULL\tGuaranteed, and students do not need to apply
The Hong Kong University of Science and Techn\tHong Kong\t0\t영어권\tNULL\tGuaranteed, but students need to apply
Momoyama Gakuin University\tJapan\t1.5\t일어권\tNULL\tGuaranteed, and students do not need to apply
University of Rostock\tGermany\t0\t독일어권\tNULL\tNot guaranteed, but students can apply
University of Jyväskylä\tFinland\t0\t영어권\tNULL\tNot guaranteed, but students can apply
University of Caen\tFrance\t2.5\t불어권\tNULL\tGuaranteed, but students need to apply
Toyo Eiwa Universtiy\tJapan\t0\t일어권\tNULL\tGuaranteed, but students need to apply
Faculty of Arts, KU Leuven\tBelgium\t0\t네덜란드어권\t영어권\tGuaranteed, but students need to apply
Technical University of Darmstadt\tGermany\t0\t독일어권\tNULL\tNot guaranteed, but students can apply
Roskilde University\tDenmark\t0\t덴마크어권\t영어권\tNot guaranteed, but students can apply
Autonomous University of Barcelona\tSpain\t0\t스페인어권\t영어권\tNot guaranteed, but students can apply
Peking University, CHINA\tChina\t3.5\t중어권\tNULL\tNot guaranteed, but students can apply
La Trobe University\tAustralia\t2.5\t영어권\tNULL\tNot guaranteed, but students can apply
University of Santiago de Compostela\tSpain\t0\t스페인어권\tNULL\tNot guaranteed, but students can apply
ISEP Study Abroad\tWorldwide\t0\t영어권\tNULL\tVaries by location; Guaranteed on Exchange and students may or may not need to apply; Usually guaranteed on Direct however some programs do not include housing
York University\tCanada\t2.5\t영어권\tNULL\tNot guaranteed, but students can apply
The University of Iowa\tUSA\t2.5\t영어권\tNULL\tNot guaranteed, but students can apply
University of Central Lancashire\tUnited Kingdom\t0\t영어권\tNULL\tGuaranteed, but students need to apply
Smith College\tUSA\t3\t영어권\tNULL\tGuaranteed, and students do not need to apply
Catholic University of Lille\tFrance\t2.75\t불어권\tNULL\tNot guaranteed, but students can apply
University of Bologna\tItaly\t0\t이탈리아어권\t영어권\tStudents need to find their own housing by themselves.
Fu Jen Catholic University\tTaiwan\t0\t중어권\t영어권\tNot guaranteed, but students can apply
European University Flensburg\tGermany\t0\t독일어권\t영어권\tNot guaranteed, but students can apply
Oita University\tJapan\t0\t일어권\t영어권\tGuaranteed, and students do not need to apply
Ritsumeikan University\tJapan\t3\t영어권\tNULL\tNot guaranteed, but students can apply
Paris School of Business\tFrance\t2.3\t불어권\t영어권\tStudents need to find their own housing by themselves.
Keio University\tJapan\t3\t일어권\t영어권\tNot guaranteed, but students can apply
Rikkyo University\tJapan\t0\t일어권\t영어권\tNot guaranteed, but students can apply
Martin-Luther-University Halle-Wittenberg\tGermany\t0\t독일어권\tNULL\tNot guaranteed, but students can apply
Uppsala University\tSweden\t0\t스웨덴어권\t영어권\tNot guaranteed, but students can apply
Nara Women's University\tJapan\t0\t일어권\tNULL\tNot guaranteed, but students can apply
Tamkang University\tTaiwan\t2\t중어권\t영어권\tNot guaranteed, but students can apply
Nagoya University\tJapan\t3\t일어권\t영어권\tGuaranteed, and students do not need to apply
Willamette University\tUSA\t3\t영어권\tNULL\tNot guaranteed, but students can apply
California State University Dominguez Hills\tUSA\t2.5\t영어권\tNULL\tGuaranteed, but students need to apply. Application must be submitted on time and meets all the housing requirements within the time frame provided by on-campus housing
Kwassui Women's University\tJapan\t0\t일어권\tNULL\tGuaranteed, but students need to apply
Inalco (Institut national des langues et civi\tFrance\t0\t불어권\tNULL\tNot guaranteed, but students can apply
Bern University of Applied Sciences (BFH)\tSwitzerland\t0\t독일어권\tNULL\tStudents need to find their own housing by themselves.
Osaka Kyoiku University\tJapan\t0\t일어권\tNULL\tGuaranteed, and students do not need to apply
Singapore Management University\tSingapore\t0\t영어권\tNULL\tNo campus housing but we will give students a list of private housing to consider and apply by themselves
SCIENCES PO\tFrance\t0\t불어권\t영어권\tDepending on Campus
Tokyo University of Foreign Studies\tJapan\t2\t일어권\t영어권\tNot guaranteed, but students can apply
Shigakkan University\tJapan\t0\t일어권\tNULL\tGuaranteed but only for female students
Ghent University\tBelgium\t0\t영어권\tNULL\tNot guaranteed, but students can apply
`;
const dataArray = dataText.split('\n').slice(1).map(line => line.split('\t'));

const dummyData = dataArray.map(data => ({
    universityName: data[0],
    country: data[1],
    grade: parseFloat(data[2]),
    language: data[3],
    language2: data[4] !== 'NULL' ? data[4] : null,
    dormitory: data[5]
}));

console.log(dummyData);
