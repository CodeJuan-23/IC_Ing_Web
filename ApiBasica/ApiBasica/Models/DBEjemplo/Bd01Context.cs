using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ApiBasica.Models.DBEjemplo;

public partial class Bd01Context : DbContext
{
    public Bd01Context()
    {
    }

    public Bd01Context(DbContextOptions<Bd01Context> options)
        : base(options)
    {
    }

    public virtual DbSet<Persona> Personas { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;database=bd01;uid=root", Microsoft.EntityFrameworkCore.ServerVersion.Parse("10.4.27-mariadb"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_general_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Persona>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("persona", tb => tb.HasComment("Tabla para registrar personas"));

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("id");
            entity.Property(e => e.ApMaterno)
                .HasMaxLength(60)
                .HasColumnName("ap_materno");
            entity.Property(e => e.ApPaterno)
                .HasMaxLength(60)
                .HasColumnName("ap_paterno");
            entity.Property(e => e.Dni)
                .HasMaxLength(20)
                .HasColumnName("dni");
            entity.Property(e => e.FechaNacimiento).HasColumnName("fecha_nacimiento");
            entity.Property(e => e.Nombre)
                .HasMaxLength(20)
                .HasColumnName("nombre");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
