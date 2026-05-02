-- =============================================
-- 03_setup_admin.sql
-- Find in the Home — Create Initial Admin User
-- =============================================
-- HƯỚNG DẪN / INSTRUCTIONS:
-- 1. Thay đổi email 'itold@demo.com' thành email của bạn.
-- 2. Thay đổi mật khẩu 'Itold@2026' thành mật khẩu bảo mật của bạn.
-- 3. Chạy toàn bộ Script này trong Supabase SQL Editor.
-- 
-- 1. Change 'itold@demo.com' to your desired admin email.
-- 2. Change 'Itold@2026' to your secure password.
-- 3. Run this script in the Supabase SQL Editor.
-- =============================================

DO $$
DECLARE
  -- CHỈNH SỬA TẠI ĐÂY / EDIT HERE
  v_admin_email TEXT := 'itold@demo.com';
  v_admin_pass  TEXT := 'Itold@2026';
  
  v_user_id UUID := gen_random_uuid();
BEGIN
  -- 0. Dọn dẹp dữ liệu cũ nếu email đã tồn tại
  -- Clean up existing data if email exists
  DECLARE
    v_old_user_id UUID;
  BEGIN
    SELECT id INTO v_old_user_id FROM auth.users WHERE email = v_admin_email;
    IF v_old_user_id IS NOT NULL THEN
      DELETE FROM public.entities WHERE user_id = v_old_user_id;
      DELETE FROM public.profiles WHERE id = v_old_user_id;
      DELETE FROM auth.identities WHERE user_id = v_old_user_id;
      DELETE FROM auth.users WHERE id = v_old_user_id;
    END IF;
  END;

  -- 1. Tạo User mới trong auth.users
  INSERT INTO auth.users (
    instance_id, id, aud, role, email, encrypted_password, 
    email_confirmed_at, recovery_sent_at, last_sign_in_at, 
    raw_app_meta_data, raw_user_meta_data, created_at, updated_at,
    confirmation_token, email_change, email_change_token_new, recovery_token
  )
  VALUES (
    '00000000-0000-0000-0000-000000000000', v_user_id, 'authenticated', 'authenticated', 
    v_admin_email, crypt(v_admin_pass, gen_salt('bf')),
    current_timestamp, current_timestamp, current_timestamp,
    '{"provider":"email","providers":["email"]}', '{}',
    current_timestamp, current_timestamp, '', '', '', ''
  );

  -- 2. Tạo Identity
  INSERT INTO auth.identities (
    id, user_id, identity_data, provider, provider_id, last_sign_in_at, created_at, updated_at
  )
  VALUES (
    gen_random_uuid(), v_user_id, 
    format('{"sub":"%s","email":"%s"}', v_user_id::text, v_admin_email)::jsonb,
    'email', v_user_id, current_timestamp, current_timestamp, current_timestamp
  );

  -- 3. Tạo Profile với quyền Admin
  INSERT INTO public.profiles (id, email, role, created_at, updated_at)
  VALUES (v_user_id, v_admin_email, 'admin', current_timestamp, current_timestamp);

  -- 4. Kích hoạt tạo dữ liệu mẫu (House Data)
  PERFORM public.auto_seed_data_for_user(v_user_id);

  RAISE NOTICE 'Admin user created successfully: %', v_admin_email;
END $$;
