import { FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Loader, Card, Input } from "@/components";
import { useUsersStore } from "@/store/users";
import { formatUserName, searchUser } from "@/utils/users";

import styles from "./UsersPage.module.scss";
import { queryKeys } from "@/constants";
import { debounce } from "@/utils/debounce";

interface UsersPageProps {}

export const UsersPage: FC<UsersPageProps> = () => {
  const { isLoading, getUsers, users } = useUsersStore();

  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [inputValue, setInputValue] = useState(
    searchParams.get(queryKeys.search) || ""
  );

  useEffect(() => {
    getUsers({ limit: 9 });
  }, [getUsers]);

  useEffect(() => {
    const searchQuery = searchParams.get(queryKeys.search);
    const newUsers = searchQuery ? searchUser(users, searchQuery) : users;
    setFilteredUsers(newUsers);
  }, [users, searchParams]);

  useEffect(() => {
    if (inputValue) {
      searchParams.set(queryKeys.search, inputValue);
    } else {
      searchParams.delete(queryKeys.search);
    }
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams, inputValue]);

  const handleInputChange = debounce((value: string) => {
    setInputValue(value);
  }, 300);

  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <Loader visible={isLoading} />
      </div>
      <div className={styles.content}>
        {!isLoading && users.length > 0 && (
          <>
            <Input
              onChange={handleInputChange}
              initialValue={inputValue}
              className={styles.input}
              placeholder="Поиск по имени, E-mail, номеру телефона"
            />
            <div className={styles.cards}>
              {filteredUsers.map((user) => (
                <Card
                  key={user.id}
                  className={styles.card}
                  title={formatUserName(user.name)}
                  text={user.email}
                />
              ))}
            </div>
          </>
        )}
        {inputValue && !filteredUsers.length && (
          <div className={styles.notFound}>Ничего не найдено</div>
        )}
      </div>
    </div>
  );
};

export default UsersPage;
