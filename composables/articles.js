const articles = ref(
    [{
            id: 1,
            title: "Futbal",
            content: "ihyhacbjnw lkinqc"
        },
        {
            id: 2,
            title: "Hokej",
            content: "ihyhacbjnw lkinqc"
        },
        {
            id: 3,
            title: "Vodne polo",
            content: "ihyhacbjnw lkinqc"
        },
        {
            id: 4,
            title: "Politika",
            content: "ihyhacbjnw lkinqc"
        },
        {
            id: 5,
            title: "Veda",
            content: "ihyhacbjnw lkinqc"
        },
        {
            id: 6,
            title: "Auta",
            content: "ihyhacbjnw lkinqc"
        },
        {
            id: 7,
            title: "Znacky",
            content: "ihyhacbjnw lkinqc"
        },
        {
            id: 8,
            title: "Oblecenie",
            content: "ihyhacbjnw lkinqc"
        },
        {
            id: 9,
            title: "Topanky",
            content: "ihyhacbjnw lkinqc"
        }

    ]
)

const deleteById = (id) => {
    articles.value = articles.value.filter(item => item.id != id);
}

/*const saveById = (id) => {
    articles.value = articles.value.filter(item => item.id = id);

}
*/
export const useArticles = () => {
        return { articles, deleteById }
    }
    /*
    export const useSave = () => {
        return { articles, saveById }

    }*/