package com.example.demo.service;

import com.example.demo.entity.FileEntity;
import com.example.demo.entity.Ogrenci;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

public interface FileService {

    public FileEntity savefile(MultipartFile file);
    public List<FileEntity> getAllFiles();

    public Optional<FileEntity> getFile(String id) ;


}