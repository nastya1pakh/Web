import { ButtonComponent } from "../../components/button/index.js"
import { ProductCardComponent } from "../../components/product-card/index.js"
import { ProductPage } from "../product/index.js";


export class MainPage {
    constructor(parent) {
        this.parent = parent
    }

    get pageRoot() {
        return document.getElementById('main-page')
    }

    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }

    getData() {
        return [
            {
                id: 1,
                src: "images/sobaka-1.jpg",
                title: "Чиро",
                text: "*блин* какой же он *могучий*",
                text_btn: "Клик"
            },
            {
                id: 2,
                src: "images/sobaka-2.jpg",
                title: "Ауф волк",
                text: "\"Волк слабее льва и тигра, но в цирке волк не выступает\"",
                text_btn: "Клак"
            },
            {
                id: 3,
                src: "images/sobaka-3.png",
                title: "Фродо и кега",
                text: "\"Собачку жалко.\"",
                text_btn: "Бум"
            },
        ]
    }

    clickCard(e) {
        console.log("asdasd")
        const cardId = e.target.dataset.id

        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()

    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const data = this.getData()
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })
    }
}