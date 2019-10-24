import psycopg2
import connection


@connection.connection_handler
def save_user(cursor, username, password):
    cursor.execute(
        '''INSERT INTO users (username, password)
        VALUES (username, password) 
        '''
    )
    return None