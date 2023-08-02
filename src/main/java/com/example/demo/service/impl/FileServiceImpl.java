package com.example.demo.service.impl;

import com.example.demo.entity.FileEntity;
import com.example.demo.entity.Ogrenci;
import com.example.demo.repository.FileRepository;
import com.example.demo.repository.OgrenciRepository;
import com.example.demo.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class FileServiceImpl implements FileService {
    public final FileRepository fileRepository;
    public final OgrenciRepository ogrenciRepository;
    @Autowired
    public FileServiceImpl(FileRepository fileRepository,OgrenciRepository ogrenciRepository){
        this.fileRepository = fileRepository;
        this.ogrenciRepository = ogrenciRepository;
    }

    @Override
    public FileEntity savefile(MultipartFile file) {

        FileEntity fileEntity = new FileEntity();
        try {
            fileEntity.setName(StringUtils.cleanPath(file.getOriginalFilename()));
            fileEntity.setContentType(file.getContentType());
            fileEntity.setData(file.getBytes());
            fileEntity.setSize(file.getSize());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return fileRepository.save(fileEntity);
    }

    @Override
    public List<FileEntity> getAllFiles() {
        return fileRepository.findAll();
    }

    @Override
    public Optional<FileEntity> getFile(String id) {
        return fileRepository.findById(id);
    }
}
