import React from 'react'
import Article from '../Templates/Article.js';
export default async function Dr(props) {
    const route = await import(`../../../data/routes/${props.r_name}/route.json`);
    const abc = JSON.parse(JSON.stringify(route));
    console.log("xc", abc.routes.length);
    console.log(props.pathname);
    if (props.pathname) {
        for (var i = 0; i < abc.routes.length; i++) {
            console.log(i, abc.routes[i].pathname)
            if (props.pathname === abc.routes[i].pathname) {
                const data = await import(`../../../data/${props.c_name}/${props.pathname}/article.json`);
                const obj = JSON.parse(JSON.stringify(data));
                console.log(obj.attributes.title);
                return (
                    <>
                        <Article pathname={props.pathname} title={obj.attributes.title} con={obj.attributes.ckeditor_content} />
                    </>
                )
            }


        }

        return (
            <div>404 not found </div>
        )

    }
}
