import { Component } from "@angular/core";
import {NgForOf} from '@angular/common';

interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  storeLink: string;
  imageGallery?: string[];
}

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  imports: [
    NgForOf
  ]
})

export class AppComponent {
  title = "Lab4";
  products: Product[];

  constructor() {
    this.products= [
      {
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/h12/hc8/84594232688670.jpg?format=gallery-medium",
        name: "Наушники Apple AirPods 2nd generation белый",
        description:
          "тип: гарнитура\n" +
          "вид: внутриканальные\n" +
          "подключение: беспроводное\n" +
          "тип акустического оформления: открытые\n" +
          "тип крепления: без крепления\n" +
          "система активного шумоподавления: Нет\n" +
          "микрофон: Да",
        rating: 5,
        storeLink:
          "https://kaspi.kz/shop/p/apple-airpods-2nd-generation-belyi-114927908/?c=750000000",
        imageGallery: [],
      },
      {
        image: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium",
        name: "Смартфон Apple iPhone 13 128Gb Midnight черный",
        description: "технология NFC: Да\n" +
          "цвет: черный\n" +
          "тип экрана: OLED, Super Retina XDR\n" +
          "диагональ: 6.1 дюйм\n" +
          "размер оперативной памяти: 4 ГБ\n" +
          "процессор: 6-ядерный Apple A15 Bionic\n" +
          "объем встроенной памяти: 128.0 ГБ\n" +
          "емкость аккумулятора: 3095.0 мАч",
        rating: 5,
        storeLink: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
        imageGallery: [],
      },
      {
        image: "https://resources.cdn-kaspi.kz/img/m/p/h84/hd8/64039078559774.jpg?format=gallery-medium",
        name: "Зарядное устройство Apple 20W USB-C Power Adapter + Apple USB-C - Lightning 1 м",
        description: "тип: сетевая зарядка\n" +
          "количество подключаемых устройств: 1\n" +
          "быстрая зарядка: Да\n" +
          "разъем подключения: USB Type-C",
        rating: 4.5,
        storeLink: "https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-apple-usb-c---lightning-1-m-101103131/?c=750000000",
        imageGallery: [],
      },
      {
        image: "https://resources.cdn-kaspi.kz/img/m/p/he5/hb3/64408556175390.jpg?format=gallery-medium",
        name: "Чехол Ala case для iPhone 11 прозрачный",
        description: "тип: спортивный\n" +
          "совместимый бренд: Apple\n" +
          "материал: резина, ,силикон\n" +
          "совместимые модели: iPhone 11",
        rating: 5,
        storeLink: "https://kaspi.kz/shop/p/ala-case-dlja-iphone-11-prozrachnyi-103661424/?c=750000000",
        imageGallery: [],
      },
      {
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/h08/hde/80282292781086.jpg?format=gallery-medium",
        name: "Электрочайник BEREKE BR-810 серый",
        description:
          "фильтр от накипи: Нет\n" +
          "тип: электрочайник\n" +
          "объем: 2.0 л\n" +
          "мощность: 1500.0 Вт\n" +
          "материал корпуса: нержавеющая сталь\n" +
          "цвет: серый",
        rating: 4.5,
        storeLink:
          "https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000",
        imageGallery: [],
      },
      {
        image: "https://resources.cdn-kaspi.kz/img/m/p/h57/h11/80130097381406.jpg?format=gallery-medium",
        name: "Наушники Marshall Major IV коричневый",
        description: "тип: гарнитура\n" +
          "вид: накладные\n" +
          "подключение: беспроводное\n" +
          "тип акустического оформления: закрытые\n" +
          "тип крепления: оголовье\n" +
          "система активного шумоподавления: Нет\n" +
          "микрофон: Да",
        rating: 5,
        storeLink: "https://kaspi.kz/shop/p/marshall-major-iv-korichnevyi-104024603/?c=750000000",
        imageGallery: [],
      },
      {
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-medium",
        name: "Кухонные весы Generic SF-400",
        description:
          "тип: электронные\n" +
          "предел взвешивания: 10.0 кг\n" +
          "точность измерения: 1.0 г\n" +
          "счетчик калорий: Да\n" +
          "цвет: белый\n",
        rating: 4.5,
        storeLink: "https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000",
        imageGallery: [],
      },
      {
        image: "https://resources.cdn-kaspi.kz/img/m/p/hd3/h7b/84577188020254.jpg?format=gallery-medium",
        name: "Ноутбук Apple MacBook Pro 14 MRX33 черный",
        description: "диагональ экрана: 14.2 дюйм\n" +
          "процессор: Apple M3 Pro\n" +
          "видеокарта: Apple M3 Pro 14-Core\n" +
          "размер оперативной памяти: 18.0 Гб\n" +
          "тип жесткого диска: SSD\n" +
          "общий объем накопителей: 512.0 Гб",
        rating: 4.5,
        storeLink: "https://kaspi.kz/shop/p/apple-macbook-pro-14-mrx33-chernyi-114861358/?c=750000000",
        imageGallery: [],
      },
      {
        image: "https://resources.cdn-kaspi.kz/img/m/p/h0a/ha5/64119036379166.jpg?format=gallery-medium",
        name: "Подставка для ноутбука Creative Bracket UN-60",
        description: "тип: без охлаждения\n" +
          "максимальная диагональ ноутбука: 15.6, ,17, ,14, ,15, ,16\n" +
          "подсветка: Нет",
        rating: 4.5,
        storeLink: "https://kaspi.kz/shop/p/creative-bracket-un-60-101298013/?c=750000000",
        imageGallery: [],
      },
      {
        image: "https://resources.cdn-kaspi.kz/img/m/p/he7/h17/64383593971742.jpg?format=gallery-medium",
        name: "Mizam 8902061 диван, обивка ткань, 70x210x75 см, серый",
        description: "механизм трансформации: еврокнижка\n" +
          "обивка: ткань\n" +
          "высота: 70.0 см\n" +
          "ширина: 210.0 см\n" +
          "глубина: 75.0 см\n" +
          "комплектация: диван\n" +
          "цвет: серый\n" +
          "страна: Казахстан",
        rating: 4,
        storeLink: "https://kaspi.kz/shop/p/mizam-8902061-divan-obivka-tkan-70x210x75-sm-seryi-104172973/?c=750000000",
        imageGallery: [],
      },
    ];
  }

  shareProduct(productLink: string, productName: string) {
    const message = encodeURIComponent(`Check out ${productName} at ${productLink}`);
    window.open(`https://wa.me/?text=${message}`);
  }
}
