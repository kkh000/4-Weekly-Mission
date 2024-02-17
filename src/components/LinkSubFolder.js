import styled from "styled-components";
import "components/LinkSubFolder.css";
import { useEffect, useState } from "react";
import { acceptDataFromApi } from "Api";
import LinkSearchBar from "./LinkSearchBar";
import LinkCardCollection from "./LinkCardCollection";

const SubFolderBtnList = styled.div`
	display: flex;
	gap: 8px;
`;

const SubFolderUtilList = styled.div`
	display: flex;
	gap: 12px;
`;

const SubFolderUtil = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 24px;
`;

const SubFolderTitle = styled.p`
	font-family: Pretendard;
	font-size: 24px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	letter-spacing: -0.2px;
`;

const Button = styled.button`
	display: flex;
	align-items: center;
	text-align: center;
	gap: 4px;
	background-color: var(--LBrary-white);
`;

const SubFolderBtn = styled.button`
	display: flex;
	align-items: center;
	text-align: center;
	gap: 4px;
	background-color: ${({ state }) =>
		state === "true" ? `var(--LBrary-Primary-color)` : `var(--LBrary-white);`};
	color: ${({ state }) =>
		state === "true" ? `var(--LBrary-White);` : `var(--LBrary-Black);`};
`;

const EmptySpace = styled.div`
	color: var(--LBrary-Black);
	padding: 41px 0 35px;
	margin: 0 auto;
	margin-bottom: 40vh;
	text-align: center;
	font-family: Pretendard;
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 400;
	line-height: 150%;

	@media (max-width: 1124px) {
		margin-bottom: 30vh;
	}

	@media (max-width: 767px) {
		font-size: 1.4rem;
	}
`;

function AddSubFolder() {
	return (
		<Button className="add-sub-folder">
			폴더 추가 <img src={"add.svg"} alt="AddFolderButton" />
		</Button>
	);
}

const EmptyLink = function ({ isLoading }) {
	const spaceText = isLoading
		? "불러오는 중입니다..."
		: "저장된 링크가 없습니다.";

	return <EmptySpace>{spaceText}</EmptySpace>;
};

function SubFolders({ subFolderData, handleCurrentFolderChange }) {
	const [subFolderList, setSubFolderList] = useState([]);
	const [selectedBtn, setSelectedBtn] = useState(0);

	const handleBtnStyleChange = async (id, name) => {
		setSelectedBtn(id);
		await handleCurrentFolderChange(id, name);
	};

	useEffect(() => {
		setSubFolderList(subFolderData);
	}, [subFolderData.length]);

	return (
		<SubFolderBtnList>
			<SubFolderBtn
				key={0}
				state={(selectedBtn === 0).toString()}
				onClick={() => handleBtnStyleChange(0, "전체")}
				className="link-sub-folder-list"
			>
				전체
			</SubFolderBtn>
			{subFolderList.map((item) => (
				<SubFolderBtn
					key={item.id}
					state={(selectedBtn === item.id).toString()}
					className="link-sub-folder-list"
					onClick={() => handleBtnStyleChange(item.id, item.name)}
				>
					{item.name}
				</SubFolderBtn>
			))}
		</SubFolderBtnList>
	);
}

function CurrentSubFolder({ currentFolder }) {
	return <SubFolderTitle>{currentFolder}</SubFolderTitle>;
}

function HandleCurrentSubFolder() {
	return (
		<SubFolderUtilList>
			<Button className="sub-folder-utility">
				<img src={"share.svg"} alt="ShareButtonImg" />
				공유
			</Button>
			<Button className="sub-folder-utility">
				<img src={"pen.svg"} alt="RenameButtonImg" />
				이름 변경
			</Button>
			<Button className="sub-folder-utility">
				<img src={"Group 36.svg"} alt="DeleteButtonImg" />
				삭제
			</Button>
		</SubFolderUtilList>
	);
}

export default function LinkSubFolder() {
	const [isCurrentFolderAll, setIsCurrentFolderAll] = useState(true);
	const [currentFolderId, setCurrentFolderId] = useState(0);
	const [currentUserId, setCurrentUserId] = useState(1);
	const [currentFolderName, setCurrentFolderName] = useState("전체");
	const [subFolderList, setSubFolderList] = useState([]);
	const [isEmptyResponse, setIsEmptyResponse] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [currentFolderQuery, setCurrentFolderQuery] = useState(
		`users/${currentUserId}/links`
	);
	const [items, setItems] = useState([]);

	const handleShareLoad = async (query) => {
		setIsLoading(true);
		setIsEmptyResponse(false);
		const { data } = await acceptDataFromApi(query);
		if (data.length === 0) {
			setIsEmptyResponse(true);
		}
		setIsLoading(false);
		setItems(data);
	};

	const handleCurrentFolderItems = (id) => {
		setIsEmptyResponse(false);
		setCurrentFolderQuery(
			`users/${currentUserId}/links${id !== 0 ? `?folderId=${id}` : ""}`
		);
		handleShareLoad(currentFolderQuery);
	};

	const handleCurrentFolderChange = (id, name) => {
		setCurrentFolderId(id);
		setCurrentFolderName(name);
		setCurrentFolderQuery(
			`users/${currentUserId}/links${id !== 0 ? `?folderId=${id}` : ""}`
		);
		if (id === 0) {
			setIsCurrentFolderAll(true);
		} else {
			setIsCurrentFolderAll(false);
		}
	};

	const subFolderData = async (requestQuery) => {
		const { data } = await acceptDataFromApi(requestQuery);
		setSubFolderList(data);
	};

	useEffect(() => {
		subFolderData(`users/${currentUserId}/folders`);
		handleShareLoad(currentFolderQuery);
	}, [currentUserId, currentFolderQuery]);

	return (
		<>
			<div>
				<SubFolderUtil>
					<SubFolders
						subFolderData={subFolderList}
						handleCurrentFolderChange={handleCurrentFolderChange}
					/>
					<AddSubFolder />
				</SubFolderUtil>
				<SubFolderUtil>
					<CurrentSubFolder currentFolder={currentFolderName} />
					{!isCurrentFolderAll && <HandleCurrentSubFolder />}
				</SubFolderUtil>
			</div>
			<LinkSearchBar />
			{isEmptyResponse || isLoading ? (
				<EmptyLink isLoading={isLoading} />
			) : (
				<>
					<LinkCardCollection items={items} favorite={true} />
				</>
			)}
		</>
	);
}
