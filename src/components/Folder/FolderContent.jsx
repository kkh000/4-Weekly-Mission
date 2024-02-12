import { useState, useEffect } from "react";
import Content from "../content/Content";
import {API_PATH_USER_FOLDER, API_PATH_ALL_LINK, API_PATH_CATEGORY_LINK} from "../../hooks/services/api-path";
import FETCH_API from "../../hooks/services/fetch-data";
import Button from "../Button";

function FolderContent({handleKebab, kebabStatus, categoryList, setCategoryList, setModalAction}){
    const [selectCategory, setSelectCategory] = useState({ // 현재 선택중인 카테고리
        id: 0,
        name: "전체"
    }) 
    const [linkList, setLinkList] = useState([]); // 유저가 가지고 있는 링크
    const [searchInputValue, setSearchInputValue] = useState("");
    // 유저가 가지고 있는 카테고리 로드(데이터 통신, 첫 렌더링 시에만 실행)
    useEffect(() => {
        const userCategoryLoad = async() => {
            try{
                const response = await FETCH_API.get(API_PATH_USER_FOLDER);
                if(!response.ok){
                    throw new Error("카테고리 로드 에러 발생");
                }
                const result = await response.json();
                setCategoryList([...categoryList, ...result.data]);
            }catch(error){
                console.error(error);
            }
            
        };
        userCategoryLoad();
    }, []);

    // 유저가 가지고 있는 전체 링크 로드(데이터 통신, 첫 렌더링 시에 실행, 전체 카테고리 클릭시 실행)
    const allLinkLoad = async() => {
        try{
            const response = await fetch(API_PATH_ALL_LINK);
            if(!response.ok){
                throw new Error("전체 링크 로드 에러 발생");
            }
            const result = await response.json();
            setLinkList(result.data);
            setSelectCategory({
                id: 0,
                name: "전체"
            });
        }catch(error){
            console.error(error);
        }
    };

    useEffect(() => {
        allLinkLoad();
    }, []);

    // 카테고리 안에 있는 링크 로드( [전체] 카테고리 이외의 카테고리 클릭시 실행) 
    const handleSelectCategory = async(id, name) => {
        try{
            const response = await fetch(API_PATH_CATEGORY_LINK+id);
            if(!response.ok){
                throw new Error("카테고리 링크 로드 에러 발생");
            }
            const result = await response.json();
            setLinkList(result.data);
            setSelectCategory({
                id,
                name
            });
        }catch(error){
            console.error(error);
        }  
    } 
    
    const getClickArea = (e) => {
        if(e.target.className !== "content__kebab"){
            handleKebab(0);
        }
    }

    const handleSearchFromSumbit = (e) => {
        e.preventDefault();
        setModalAction({
            isView: true,
            action: "폴더에 추가",
            subTitle: searchInputValue,
        });
    }

    const handleSearchInputChange = (e) => {
        setSearchInputValue(e.target.value);
    }

    const contentProps = {
        categoryList,
        selectCategory,
        allLinkLoad,
        handleSelectCategory,
        handleKebab,
        kebabStatus,
        linkList,
        option: true,
        setModalAction,
    }
 
    return (
        <main className="folder" onClick={(e) => getClickArea(e)}>
            <section className="link">
                <div className="link__box">
                    <form className="link__form" onSubmit={handleSearchFromSumbit}>
                        <input onChange={(e) => handleSearchInputChange(e)} value={searchInputValue}
                        className="link__inputtext" type="text" placeholder="        링크를 추가해 보세요"/>
                        <Button className="link__add" buttonText="추가하기"/>
                    </form>
                </div>
            </section>
            <Content {...contentProps}/>
        </main>
    )
}

export default FolderContent;