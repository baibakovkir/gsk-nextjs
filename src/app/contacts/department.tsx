import { SectionTitle } from "@/components/SectionTitle";
export default function Department() {
  const managers = [
    ['Бутусов Дмитрий Владимирович', 'Врио председателя', '+7 495 604-8370 (доб. 105)', 'gsk@gossortrf.ru'],
    ['Пшенникова Екатерина Ивановна', 'Первый заместитель председателя', '+7 495 604-8370 (доб. 108)', 'e.pshennikova@gossortrf.ru'],
    ['Гайтер Антон Игоревич', 'Заместитель председателя', '+7 495 604-8370 (доб. 211)', 'a.gaiter@gossortrf.ru'],
    ['Рязанцев Сергей Валерьевич', 'Заместитель председателя', '+7 495 604-8370 (доб. 104)', 'rsv@gossortrf.ru'],
    ['Дудукалова Галина Александровна', 'Главный бухгалтер', '+7 495 604-8370 (доб. 101)', 'dudukalova@gossortrf.ru'],
    ['Гречихина Марина Евгеньевна', 'Главный инспектор по филиалам в субьектах РФ', '+7 495 604-8307 (доб. 113, 185)', 'ofprav@gossortrf.ru'],
  ];

  const about = [
    ['Единые телефоны ФГБУ “Госсорткомиссия”', '+7 (495) 604-8283, +7 (495) 604-8363, +7 (495) 604-8370'],
    ['Адрес для направления корреспонденции, писем Почты России', '107140, г. Москва, ул. Садовая-Спасская, д. 11/1'],
    ['Адрес для приёма посетителей, курьеров и экспресс-почты' , '107045, г. Москва, Даев пер., д. 20 (БЦ «Даев Плаза», 8 эт.)'],
    ['Время работы:', 'Пн-Чт 09:00-18:00, Пт 09:00-16:45, Обед: 12:00-13:00']
  ]

  const departments = [
      ['Отдел кадров','начальник отдела','Горбачева Екатерина Петровна','контакты','+7 495 604-8307 (доб. 230, 232)','kadry_mos@gossortrf.ru'],
      ['Отдел регистрации, госреестров, международного взаимодействия и методики','начальник отдела','Авсарагов Андрей Валерьевич','контакты','+7 495 604-8206, +7 495 604-8207 (доб. 106, 201, 202, 203, 205)','registr@gossortrf.ru','Регистрация лицензионных договоров:','+7 495 604-8014 (доб. 130)','license@gossortrf.ru','Заключение договоров на платные услуги:','+7 495 604-8243 (доб. 200, 204)',' dogovor@gossortrf.ru','контакты начальника','+7 495 604-8295 (доб.206)'],
      ['Отдел кормовых культур и кукурузы','начальник отдела','Рожнова Регина Михайловна','контакты','+7 495 604-8266 (доб. 190, 194)','korm@gossortrf.ru','По вопросам животноводства:','+7 495 604-8266 (доб. 175)'],
      ['Отдел технических культур','начальник отдела','Куликов Михаил Александрович','контакты','+7 495 604-8265 (доб. 180, 181)','tech@gossortrf.ru'],
      ['Отдел зерновых культур','начальник отдела','Макеева Татьяна Александровна','контакты','+7 495 604-8265 (доб. 160 — 165)','zerno@gossortrf.ru'],
      ['Отдел овощных, плодово-ягодных и декоративных культур','начальник отдела','Яськова Юлия Сергеевна','контакты','+7 495 604-8266 (доб. 170, 171, 150, 152)','ovoch@gossortrf.ru, plod@gossortrf.ru'],
      ['Отдел технического и административного обеспечения','начальник отдела','Плотников Александр Владимирович','контакты','+7 495 604-8246 (доб. 140, 141)','aho@gossortrf.ru'],
      ['Отдел правового обеспечения и госзакупок','начальник отдела','Лосева Ирина Николаевна','контакты','+7 495 604-8283 (доб. 143, 146, 147, 148)','pravo@gossortrf.ru, zakupki@gossortrf.ru'],
      ['Планово-экономический отдел','начальник отдела','Мишина Татьяна Евгеньевна','контакты','+7 495 604-8363 (доб. 102, 112, 114)','plan@gossortrf.ru'],
      ['Отдел бухгалтерского учета и отчетности','начальник отдела','Родина Антонина Петровна','контакты','+7 495 604-8178 (доб. 122-126)','buh@gossortrf.ru'],
      ['Отдел информационного обеспечения','начальник отдела','Чистюхин Александр Александрович','контакты','+7 495 604-8246 (доб. 111)','it@gossortrf.ru'],
  ]

  const managers1 = managers.slice(0, 3);
  const managers2 = managers.slice(3, 6);


  return (
      <>
        <div className="w-full flex justify-center flex-col items-center">
          <div className="w-fit flex flex-col items-center justify-center p-5 rounded-2xl border-2 border-lime-600 border-dashed">
            {about.map((item, index) => (
              <div className="w-full flex justify-center flex-col items-start lg:mb-4 mb-3" key={index}>
                <p className="block text-xs text-gray-700 dark:text-gray-300 mb-1 lg:text-lg">{item[0]}</p>
                <p className="block text-xs font-bold lg:text-2xl">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
          <div className="w-full flex justify-center flex-col items-center">
            <SectionTitle preTitle="Контакты" title="Руководство" />
            <div className="w-full flex items-center lg:justify-between flex-col flex-wrap lg:mb-10 lg:flex-row">
              {managers1.map((manager, index) => (
                <div className="flex flex-col items-center ml-3 mr-3 mt-5 w-64 lg:mt-0" key={index}>
                  <div className="text-xl font-bold text-center lg:text-2xl">{manager[0].split(' ')[0]}</div>
                  <div className="mb-2 font-bold max-w-64 text-center lg:text-xl">{manager[0].split(' ')[1]} {manager[0].split(' ')[2]}</div>
                  <div className="text-xs font-bold text-lime-600 mb-2 block max-w-64 text-center">{manager[1]}</div>
                  <div className="text-xs font-bold">{manager[2]}</div>
                  <div className="text-xs font-bold">{manager[3]}</div>
                </div>
              ))}
            </div>
            <div className="w-full flex items-center lg:justify-between flex-col flex-wrap mb-10 lg:flex-row">
              {managers2.map((manager, index) => (
                <div className="flex flex-col items-center ml-3 mr-3 mt-5 w-64 lg:mt-0" key={index}>
                  <div className="text-xl font-bold text-center lg:text-2xl">{manager[0].split(' ')[0]}</div>
                  <div className="mb-2 font-bold max-w-64 text-center lg:text-xl">{manager[0].split(' ')[1]} {manager[0].split(' ')[2]}</div>
                  <div className="text-xs font-bold text-lime-600 mb-2 block max-w-64 text-center">{manager[1]}</div>
                  <div className="text-xs font-bold">{manager[2]}</div>
                  <div className="text-xs font-bold">{manager[3]}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-center flex-col items-center">
            <SectionTitle title="Отделы" />
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 justify-start ">
              {departments.map((department, index) => (
                <div className="flex items-start justify-start flex-col mt-5 lg:mb-8 mb-5" key={index}>
                  <div className="w-full text-lg lg:min-h-20 font-bold text-center lg:text-xl mb-4">{department[0]}</div>
                  <div className="w-full flex flex-col lg:flex-row">
                    <div className="flex flex-col items-center w-full lg:w-4/6">
                      <div className="text-xs font-bold text-lime-600 mb-2 block max-w-64 text-center">{department[1]}</div>
                      <div className="text-lg text-center">{department[2]}</div>
                      {department[12] && <div className="text-xs font-bold text-lime-600 lg:mt-6 mt-2 mb-2 block max-w-64 text-center">{department[12]}</div>}
                      {department[13] && <div className="text-sm w-full text-center mb-2">{department[13]}</div>}
                    </div>
                    <div className="flex flex-col items-center w-full lg:justify-start justify-center lg:w-2/6">
                      <div className="text-xs font-bold text-lime-600 mb-2 block max-w-64 text-center">{department[3]}</div>
                      <div className="text-sm w-full text-center lg:text-start mb-2">{department[4]}</div>
                      <div className="text-sm w-full text-center lg:text-start mb-2">{department[5]}</div>
                      {department[6] && <div className="text-xs font-bold text-lime-600 mb-2 block max-w-64 text-center">{department[6]}</div>}
                      {department[7] && <div className="text-sm w-full text-center lg:text-start mb-2">{department[7]}</div>}
                      {department[8] && <div className="text-sm w-full text-center lg:text-start mb-2">{department[8]}</div>}
                      {department[9] && <div className="text-xs font-bold text-lime-600 mb-2 block max-w-64 text-center">{department[9]}</div>}
                      {department[10] && <div className="text-sm w-full text-center lg:text-start mb-2">{department[10]}</div>}
                      {department[11] && <div className="text-sm w-full text-center lg:text-start mb-2">{department[11]}</div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </>
  );
}