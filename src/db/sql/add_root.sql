-- public.rootsに行を挿入する関数
create or replace function public.add_root()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
    insert into public.roots (id, first_name, last_name)
    values (new.id, new.raw_user_meta_data ->> 'first_name', new.raw_user_meta_data ->> 'last_name');
    return new;
end;
$$;

-- ユーザー作成時に関数を起動するトリガー
create trigger add_root
    after insert on auth.users
    for each row execute procedure public.add_root();

