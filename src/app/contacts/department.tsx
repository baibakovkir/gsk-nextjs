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
            <SectionTitle preTitle="Контакты" title="Центральный аппарат" />
            <div className="w-full flex items-center lg:justify-between flex-col flex-wrap lg:mb-10 lg:flex-row">
              {managers1.map((manager, index) => (
                <div className="flex flex-col items-center ml-3 mr-3 mt-5 mb-10 w-64 lg:mt-0" key={index}>
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
                <div className="flex flex-col items-center ml-3 mr-3 mt-5 mb-10 w-64 lg:mt-0" key={index}>
                  <div className="text-xl font-bold text-center lg:text-2xl">{manager[0].split(' ')[0]}</div>
                  <div className="mb-2 font-bold max-w-64 text-center lg:text-xl">{manager[0].split(' ')[1]} {manager[0].split(' ')[2]}</div>
                  <div className="text-xs font-bold text-lime-600 mb-2 block max-w-64 text-center">{manager[1]}</div>
                  <div className="text-xs font-bold">{manager[2]}</div>
                  <div className="text-xs font-bold">{manager[3]}</div>
                </div>
              ))}
            </div>
          </div>
      </>
  );
}